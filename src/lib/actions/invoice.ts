import { BASE_URL } from "@/constants";
import { BaseResponse, Invoice } from "../types";

export async function getInvoices(): Promise<BaseResponse<Invoice[]> | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/invoices`, {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error(`API error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDetailInvoice(
  id: number
): Promise<BaseResponse<Invoice>> {
  const res = await fetch(`${BASE_URL}/api/invoices/${id}`, {});
  return res.json();
}

export async function createInvoice(
  body: Invoice
): Promise<BaseResponse<Invoice>> {
  const res = await fetch(`${BASE_URL}/api/invoices`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function updateInvoice(
  id: number,
  body: Invoice
): Promise<BaseResponse<Invoice>> {
  const res = await fetch(`${BASE_URL}/api/invoices/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function deleteInvoice(id: number): Promise<BaseResponse<null>> {
  const res = await fetch(`${BASE_URL}/api/invoices/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
