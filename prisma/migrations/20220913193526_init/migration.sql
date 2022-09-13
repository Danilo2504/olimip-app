/*
  Warnings:

  - Added the required column `web` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `location` ADD COLUMN `web` VARCHAR(191) NOT NULL;
