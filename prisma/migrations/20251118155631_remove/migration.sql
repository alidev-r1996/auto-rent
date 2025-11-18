/*
  Warnings:

  - You are about to drop the `CarFeature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cover` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mile_age` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CarFeature" DROP CONSTRAINT "CarFeature_car_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."CarImage" DROP CONSTRAINT "CarImage_car_id_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "mile_age" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."CarFeature";

-- DropTable
DROP TABLE "public"."CarImage";
