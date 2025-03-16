import prismaCient from "../../../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prismaCient.invoice.findMany({
      orderBy: {
        id: "desc",
      },
    });
    console.log("response server", res);
    return NextResponse.json({ status: true, data: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
