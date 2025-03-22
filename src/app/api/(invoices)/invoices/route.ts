import prismaCient from "../../../../../prisma/client";
import { NextResponse, type NextRequest } from "next/server";
import { InvoiceSchema } from "@/lib/schemas";
import { Invoice } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || "";
    const status = searchParams.get("status") || undefined;
    let filterStatus = {};

    if (status) {
      filterStatus = { status: Number(status) };
    }

    const res = await prismaCient.invoice.findMany({
      where: {
        description: {
          contains: query,
          mode: "insensitive",
        },
        ...filterStatus,
      },
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json({ status: true, data: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Invoice;
    const validateBody = InvoiceSchema.safeParse({
      ...body,
      dueDate: new Date(body.dueDate),
    });

    if (!validateBody.success) {
      const errors = JSON.parse(validateBody.error.message);
      return NextResponse.json(
        {
          status: false,
          message: `Invalid data. ${errors[0].message}`,
          data: null,
        },
        { status: 400 }
      );
    }

    const { code, dueDate, amount, description, status } = body;
    const createInvoice = await prismaCient.invoice.create({
      data: {
        code,
        dueDate,
        amount,
        description,
        status: Number(status),
      },
    });

    return NextResponse.json({
      status: true,
      message: "Successfully add new invoice",
      data: createInvoice,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: false, message: "Internal error" },
      { status: 500 }
    );
  }
}
