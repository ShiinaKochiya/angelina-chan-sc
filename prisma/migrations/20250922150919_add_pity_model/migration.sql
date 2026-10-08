-- CreateTable
CREATE TABLE `Pity` (
    `userID` VARCHAR(191) NOT NULL,
    `wuwaPity` INTEGER NOT NULL DEFAULT 0,
    `arknightsPity` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Pity_userID_key`(`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
