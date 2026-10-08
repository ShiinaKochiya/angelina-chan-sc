const { PrismaClient } = require("@prisma/client");

let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ["error", "warn"],
  });
}

prisma = global.prisma;

module.exports = prisma;
