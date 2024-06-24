/*
  Warnings:

  - You are about to drop the `PaymentF` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PaymentF" DROP CONSTRAINT "PaymentF_IdCollaborator_fkey";

-- DropTable
DROP TABLE "PaymentF";

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "total_value" DOUBLE PRECISION NOT NULL,
    "payment_method" TEXT,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "IdCollaborator" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_IdCollaborator_fkey" FOREIGN KEY ("IdCollaborator") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
