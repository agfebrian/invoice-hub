export enum StatusInvoice {
  "PAID" = 1,
  "UNPAID",
  "PENDING",
}

export interface Invoice {
  id: number;
  code: string;
  dueDate: Date;
  status: StatusInvoice;
  amount: number;
  description: string;
}

export interface Navigation {
  title: string;
  path: string;
  icon: {
    default: string;
    active: string;
  };
}

export interface TableHeadCell {
  id: string;
  label: string;
  width?: number;
  align?: "left" | "right" | "center";
}

export interface TableBasicProps<T> {
  header: TableHeadCell[];
  items: T[];
  renderValue?: (row: T) => JSX.Element;
}

export interface BaseResponse<T> {
  status: boolean;
  message: string;
  data?: T;
}
