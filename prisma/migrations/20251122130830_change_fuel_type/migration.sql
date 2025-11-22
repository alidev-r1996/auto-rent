/*
  Warnings:

  - The values [Gas] on the enum `FuelType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FuelType_new" AS ENUM ('Gasoline', 'Electric');
ALTER TABLE "public"."Car" ALTER COLUMN "fuel" DROP DEFAULT;
ALTER TABLE "Car" ALTER COLUMN "fuel" TYPE "FuelType_new" USING ("fuel"::text::"FuelType_new");
ALTER TYPE "FuelType" RENAME TO "FuelType_old";
ALTER TYPE "FuelType_new" RENAME TO "FuelType";
DROP TYPE "public"."FuelType_old";
ALTER TABLE "Car" ALTER COLUMN "fuel" SET DEFAULT 'Gasoline';
COMMIT;
