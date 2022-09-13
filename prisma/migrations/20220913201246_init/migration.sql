-- AlterTable
ALTER TABLE `location` MODIFY `desc` VARCHAR(255) NULL,
    MODIFY `valoration` INTEGER NULL DEFAULT 0,
    MODIFY `web` VARCHAR(191) NULL;
