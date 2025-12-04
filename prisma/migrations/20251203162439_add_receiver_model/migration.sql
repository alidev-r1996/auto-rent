/*
  Warnings:

  - Added the required column `order_number` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CarDiscount" DROP CONSTRAINT "CarDiscount_discount_id_fkey";

-- DropIndex
DROP INDEX "public"."Availability_car_id_key";

-- DropIndex
DROP INDEX "public"."Availability_start_date_end_date_car_id_idx";

-- DropIndex
DROP INDEX "public"."Discount_active_title_idx";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "order_number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "status" SET DEFAULT 'Pending';

-- CreateTable
CREATE TABLE "Receiver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receiver_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receiver_order_id_key" ON "Receiver"("order_id");

-- CreateIndex
CREATE INDEX "Receiver_phoneNumber_national_id_idx" ON "Receiver"("phoneNumber", "national_id");

-- CreateIndex
CREATE INDEX "Availability_start_date_end_date_car_id_isBlocked_idx" ON "Availability"("start_date", "end_date", "car_id", "isBlocked");

-- CreateIndex
CREATE INDEX "CarDiscount_car_id_discount_id_idx" ON "CarDiscount"("car_id", "discount_id");

-- CreateIndex
CREATE INDEX "Discount_active_title_startDate_endDate_idx" ON "Discount"("active", "title", "startDate", "endDate");

-- AddForeignKey
ALTER TABLE "CarDiscount" ADD CONSTRAINT "CarDiscount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receiver" ADD CONSTRAINT "Receiver_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
