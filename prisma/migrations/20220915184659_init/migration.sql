/*
  Warnings:

  - You are about to drop the column `username` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Location_username_key` ON `location`;

-- DropIndex
DROP INDEX `User_name_key` ON `user`;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `username`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `valoration` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    DROP COLUMN `verified`,
    ADD COLUMN `username` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Location_name_key` ON `Location`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
