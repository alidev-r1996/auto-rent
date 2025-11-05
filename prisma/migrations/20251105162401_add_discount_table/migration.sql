/*
  Warnings:

  - You are about to drop the column `carId` on the `CarFeature` table. All the data in the column will be lost.
  - You are about to drop the column `carId` on the `CarImage` table. All the data in the column will be lost.
  - Added the required column `car_id` to the `CarFeature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_id` to the `CarImage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CarFeature" DROP CONSTRAINT "CarFeature_carId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CarImage" DROP CONSTRAINT "CarImage_carId_fkey";

-- AlterTable
ALTER TABLE "CarFeature" DROP COLUMN "carId",
ADD COLUMN     "car_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarImage" DROP COLUMN "carId",
ADD COLUMN     "car_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "startDate" TEXT,
    "endDate" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarDiscount" (
    "car_id" TEXT NOT NULL,
    "discount_id" TEXT NOT NULL,

    CONSTRAINT "CarDiscount_pkey" PRIMARY KEY ("car_id","discount_id")
);

-- AddForeignKey
ALTER TABLE "CarFeature" ADD CONSTRAINT "CarFeature_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDiscount" ADD CONSTRAINT "CarDiscount_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDiscount" ADD CONSTRAINT "CarDiscount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
