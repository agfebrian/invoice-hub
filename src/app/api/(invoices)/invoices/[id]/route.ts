import prismaCient from "../../../../../../prisma/client";
import { NextResponse } from "next/server";
import { InvoiceSchema } from "@/lib/schemas";
import { Invoice } from "@/lib/types";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const res = await prismaCient.invoice.findUnique({ where: { id } });
    return NextResponse.json({ status: true, data: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function PUT(
  requset: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = (await requset.json()) as Invoice;
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
    const updateInvoice = await prismaCient.invoice.update({
      where: {
        id,
      },
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
      message: "Successfully update invoice",
      data: updateInvoice,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: false, message: "Internal error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    await prismaCient.invoice.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      status: true,
      message: "Successfully delete invoice",
      data: null,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: false, message: "Internal error" },
      { status: 500 }
    );
  }
}
