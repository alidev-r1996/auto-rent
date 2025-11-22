/*
  Warnings:

  - You are about to drop the column `paymentstatus` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paymentstatus",
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'Pending';

-- CreateTable
CREATE TABLE "Availability" (
    "id" TEXT NOT NULL,
    "car_id" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
