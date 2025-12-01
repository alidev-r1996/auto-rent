/*
  Warnings:

  - A unique constraint covering the columns `[authority]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Made the column `authority` on table `Payment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."Payment_order_id_ref_id_status_idx";

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "authority" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_authority_key" ON "Payment"("authority");

-- CreateIndex
CREATE INDEX "Payment_order_id_ref_id_status_authority_idx" ON "Payment"("order_id", "ref_id", "status", "authority");
