-- CreateTable
CREATE TABLE "PaymentDetail" (
    "id" TEXT NOT NULL,
    "rent" DECIMAL(65,30) NOT NULL,
    "delivery" DECIMAL(65,30) NOT NULL,
    "return" DECIMAL(65,30) NOT NULL,
    "insurance" DECIMAL(65,30) NOT NULL,
    "guarranty" DECIMAL(65,30) NOT NULL,
    "driver" DECIMAL(65,30) NOT NULL,
    "tax" DECIMAL(65,30) NOT NULL,
    "payment_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentDetail_payment_id_key" ON "PaymentDetail"("payment_id");

-- CreateIndex
CREATE INDEX "PaymentDetail_payment_id_idx" ON "PaymentDetail"("payment_id");

-- AddForeignKey
ALTER TABLE "PaymentDetail" ADD CONSTRAINT "PaymentDetail_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
