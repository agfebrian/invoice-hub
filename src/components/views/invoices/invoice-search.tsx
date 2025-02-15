"use client";
import React from "react";
import { TextFieldStyled } from "@/components/ui/text-field-styled";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function InputAndormentSearch() {
  return (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  );
}

export default function InvoiceSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    1000
  );

  return (
    <TextFieldStyled
      defaultValue={searchParams.get("q")?.toString()}
      onChange={handleChange}
      placeholder="Search"
      slotProps={{
        input: {
          startAdornment: <InputAndormentSearch />,
        },
      }}
      sx={{
        backgroundColor: "white",
      }}
    />
  );
}
