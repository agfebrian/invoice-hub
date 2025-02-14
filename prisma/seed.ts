import { PrismaClient } from "@prisma/client";
import { INVOICES_DATA } from "@/constants";

const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.createMany({
    data: INVOICES_DATA,
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
