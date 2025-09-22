const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getPity(userID) {
  let pity = await prisma.pity.findUnique({
    where: { userID: userID },
  });

  if (!pity) {
    pity = await prisma.pity.create({
      data: {
        userID: userID,
        wuwaPity: 0,
        arknightsPity: 0,
      },
    });
  }

  return pity;
}

async function updatePity(userID, data) {
  return await prisma.pity.update({
    where: { userID: userID },
    data,
  });
}

module.exports = {
  getPity,
  updatePity
};