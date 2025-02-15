"use client";
import SelectStyled from "@/components/ui/select-styled";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function InvoiceFilterStatus() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <SelectStyled
      defaultValue={searchParams.get("status")?.toString()}
      placeholder="All Status"
      onChange={handleChange}
      sx={{
        backgroundColor: "white",
      }}
    >
      <MenuItem value="">All Status</MenuItem>
      <MenuItem value="Paid">Paid</MenuItem>
      <MenuItem value="Unpaid">Unpaid</MenuItem>
      <MenuItem value="Pending">Pending</MenuItem>
    </SelectStyled>
  );
}
