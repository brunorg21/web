"use client";
import { IBorder } from "@/models/border";
import { useRouter } from "next/navigation";

interface CountryListItemProps {
  border: IBorder;
}

export function CountryListItem({ border }: CountryListItemProps) {
  const router = useRouter();
  return (
    <li
      className="cursor-pointer hover:underline"
      onClick={() => router.push(`/countries/${border.countryCode}`)}
      key={border.countryCode}
    >
      {border.commonName}
    </li>
  );
}
