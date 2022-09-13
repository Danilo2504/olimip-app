/*
  Warnings:

  - You are about to drop the `datapack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `datapack`;

-- DropTable
DROP TABLE `image`;

-- DropTable
DROP TABLE `verification`;

-- CreateTable
CREATE TABLE `Location` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    `ubication` VARCHAR(191) NULL,
    `valoration` INTEGER NOT NULL,

    UNIQUE INDEX `Location_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
