/*
  Warnings:

  - Added the required column `end_time` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receive_location` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `return_location` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "end_time" TEXT NOT NULL,
ADD COLUMN     "receive_location" TEXT NOT NULL,
ADD COLUMN     "return_location" TEXT NOT NULL,
ADD COLUMN     "start_time" TEXT NOT NULL;
