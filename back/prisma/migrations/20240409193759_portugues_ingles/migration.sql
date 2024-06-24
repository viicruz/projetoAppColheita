/*
  Warnings:

  - You are about to drop the `Colaborador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_idColaborador_fkey";

-- DropForeignKey
ALTER TABLE "Producao" DROP CONSTRAINT "Producao_idColaborador_fkey";

-- DropForeignKey
ALTER TABLE "Producao" DROP CONSTRAINT "Producao_idProduto_fkey";

-- DropTable
DROP TABLE "Colaborador";

-- DropTable
DROP TABLE "Pagamento";

-- DropTable
DROP TABLE "Producao";

-- DropTable
DROP TABLE "Produto";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "address" TEXT,
    "cep" INTEGER,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "birth_date" TIMESTAMP(3),

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Production" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_value" DOUBLE PRECISION NOT NULL,
    "production_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "idCollaborator" TEXT NOT NULL,
    "idProduct" TEXT NOT NULL,

    CONSTRAINT "Production_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentF" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "total_value" DOUBLE PRECISION NOT NULL,
    "payment_method" TEXT,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "IdCollaborator" TEXT NOT NULL,

    CONSTRAINT "PaymentF_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_cpf_key" ON "Collaborator"("cpf");

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_idCollaborator_fkey" FOREIGN KEY ("idCollaborator") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD CONSTRAINT "Production_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentF" ADD CONSTRAINT "PaymentF_IdCollaborator_fkey" FOREIGN KEY ("IdCollaborator") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
