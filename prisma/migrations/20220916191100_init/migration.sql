-- AlterTable
ALTER TABLE `location` ADD COLUMN `schedules` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';
