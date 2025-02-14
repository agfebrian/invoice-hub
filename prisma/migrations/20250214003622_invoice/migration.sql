-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);
