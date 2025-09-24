const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const pityCache = new Map();
      relay = 0;

async function getPity(userID) {
  if (pityCache.has(userID)) {
    return pityCache.get(userID);
  }

  let pity = await prisma.pity.findUnique({
    where: { userID },
  });

  if (!pity) {
    pity = await prisma.pity.create({
      data: {
        userID,
        wuwaPity: 0,
        arknightsPity: 0,
      },
    });
  }

  pityCache.set(userID, pity);
  return pity;
}

function updatePityCache(userID, newData) {
  let pity = pityCache.get(userID);
  if (!pity) {
    pity = { userID, wuwaPity: 0, arknightsPity: 0 };
  }
  const updated = { ...pity, ...newData };
  pityCache.set(userID, updated);
  return updated;
}

async function flushPityCache() {
  relay++
  for (const [userID, data] of pityCache.entries()) {
    try {
      await prisma.pity.upsert({
        where: { userID },
        update: {
          wuwaPity: data.wuwaPity,
          arknightsPity: data.arknightsPity,
        },
        create: {
          userID,
          wuwaPity: data.wuwaPity,
          arknightsPity: data.arknightsPity,
        },
      });
      if (relay == 8640){ //set the amount of data flush cycles needed for 1 log to print, to reduce log size
        const time = new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
        console.log(`[${time} Database] Flushed pity for ${userID}`, data);
        relay = 0;
      }
    } catch (err) {
      console.error("Failed to flush pity", err);
    }
  }
}

module.exports = {
  getPity,
  updatePityCache,
  pityCache,
  flushPityCache, // export for background worker
};
