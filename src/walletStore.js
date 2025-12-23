const fs = require('fs')
const path = require('path')

const walletPath = path.join(__dirname, 'data', 'wallet.json')

let store = {}

function load(){
    try{
        if (!fs.existsSync(walletPath)){
            fs.writeFileSync(walletPath, JSON.stringify({}, null, 4), 'utf8')
            store = {}
            return
        }
        const raw = fs.readFileSync(walletPath, 'utf8')
        store = JSON.parse(raw)
    } catch (e){
        console.error('Failed to load wallet store', e)
        store = {}
    }
}

// initialize store immediately
load()

function save(){
    try{
        fs.writeFileSync(walletPath, JSON.stringify(store, null, 4), 'utf8')
    } catch (e){
        console.error('Failed to save wallet store', e)
    }
}

function getWallet(userId){
    if (!store) load()
    const key = String(userId)
    let v = store[key]
    if (v === undefined){
        const initial = 500000000n
        store[key] = initial.toString()
        save()
        return initial
    }
    return BigInt(v)
}

function setWallet(userId, value){
    if (!store) load()
    const str = (typeof value === 'bigint') ? value.toString() : String(value)
    store[String(userId)] = str
    save()
    return BigInt(str)
}

function addWallet(userId, delta){
    const curr = getWallet(userId)
    const newVal = curr + BigInt(delta)
    setWallet(userId, newVal)
    return newVal
}

module.exports = { getWallet, setWallet, addWallet }
