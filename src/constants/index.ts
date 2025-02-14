import { Navigation, Invoice, StatusInvoice } from "@/lib/types";

export const NAVIGATION: Navigation[] = [
  {
    title: "Add Invoice",
    path: "/invoices/add",
    icon: {
      default: "/assets/icons/add-invoice.svg",
      active: "/assets/icons/add-invoice-light.svg",
    },
  },
  {
    title: "My Invoices",
    path: "/invoices/list",
    icon: {
      default: "/assets/icons/my-invoices.svg",
      active: "/assets/icons/my-invoices-light.svg",
    },
  },
];

export const INVOICES_DATA: Invoice[] = [
  {
    id: 1,
    code: "INV202501",
    dueDate: new Date("01/13/2025"),
    status: StatusInvoice.PAID,
    amount: 582901,
    description: "Internet Subscription",
  },
  {
    id: 2,
    code: "INV202502",
    dueDate: new Date("02/04/2025"),
    status: StatusInvoice.PAID,
    amount: 311909,
    description: "Electricity Bill",
  },
  {
    id: 3,
    code: "INV202503",
    dueDate: new Date("02/23/2025"),
    status: StatusInvoice.UNPAID,
    amount: 425000,
    description: "Gym Membership",
  },
  {
    id: 4,
    code: "INV202504",
    dueDate: new Date("02/23/2025"),
    status: StatusInvoice.PENDING,
    amount: 148891,
    description: "Phone Bill",
  },
];

export const BASE_URL =
  process.env.NODE_ENV == "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCALE
    : process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;
