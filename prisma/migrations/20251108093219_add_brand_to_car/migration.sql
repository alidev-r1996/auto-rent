/*
  Warnings:

  - Added the required column `brand` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Car_name_type_price_day_price_month_idx";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "brand" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "verified" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Car_name_type_price_day_price_month_brand_idx" ON "Car"("name", "type", "price_day", "price_month", "brand");

-- CreateIndex
CREATE INDEX "Comment_blog_id_car_id_idx" ON "Comment"("blog_id", "car_id");

-- CreateIndex
CREATE INDEX "Insurance_order_id_idx" ON "Insurance"("order_id");
