const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const moneyCache = new Map()
relay = 0

function toBigInt(x){
    return typeof x === 'bigint' ? x : BigInt(x || 0)
}

async function getMoney(userID){
    if (moneyCache.has(userID)){
        return moneyCache.get(userID)
    }

    let money = await prisma.money.findUnique({ where: { userID } })

    if (!money){
        money = await prisma.money.create({
            data: {
                userID,
                chips: toBigInt(200),
                wallet: toBigInt(500000000)
            }
        })
    }

    moneyCache.set(userID, money)
    return money
}

function updateMoneyCache(userID, newData){
    let money = moneyCache.get(userID)
    if (!money){
        money = { 
            userID, chips: toBigInt(200), 
            wallet: toBigInt(500000000) 
        }
    }
    const updated = { ...money, ...newData }
    moneyCache.set(userID, updated)
    return updated
}

async function flushMoneyCache(){
    relay++
    for (const [userID, data] of moneyCache.entries()){
        try{
            await prisma.money.upsert({
                where: { userID },
                update: {
                    chips: toBigInt(data.chips),
                    wallet: toBigInt(data.wallet)
                },
                create: {
                    userID,
                    chips: toBigInt(data.chips),
                    wallet: toBigInt(data.wallet)
                }
            })
            if (relay == 8640){
                const time = new Date().toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })
                //console.log(`[${time} Database] Flushed money for ${userID}`, data)
                relay = 0
            }
        } catch (err){
            console.error("Failed to flush money", err)
        }
    }
}

module.exports = {
    getMoney,
    updateMoneyCache,
    moneyCache,
    flushMoneyCache,
}
