/*
  Warnings:

  - Added the required column `userID` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `userID` BIGINT UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
