-- DropIndex
DROP INDEX "public"."Availability_start_date_end_date_idx";

-- AlterTable
ALTER TABLE "Availability" ADD COLUMN     "reason" TEXT;

-- CreateIndex
CREATE INDEX "Availability_start_date_end_date_car_id_idx" ON "Availability"("start_date", "end_date", "car_id");
