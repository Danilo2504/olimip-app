/*
  Warnings:

  - You are about to drop the column `name` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `valoration` on the `location` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Location_name_key` ON `location`;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `name`,
    DROP COLUMN `valoration`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Location_username_key` ON `Location`(`username`);
