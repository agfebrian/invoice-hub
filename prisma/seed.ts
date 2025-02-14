import prismaCient from "./client";
import { INVOICES_DATA } from "@/constants";

async function main() {
  await prismaCient.invoice.createMany({
    data: INVOICES_DATA,
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prismaCient.$disconnect());
