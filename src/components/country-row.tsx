"use client";
import { ICountry } from "@/models/country";
import { useRouter } from "next/navigation";

interface CountryRowProps {
  country: ICountry;
}

export function CountryRow({ country }: CountryRowProps) {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/countries/${country.countryCode}`)}
      key={country.countryCode}
      className="hover:bg-gray-50 hover:cursor-pointer"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {country.countryCode}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {country.name}
      </td>
    </tr>
  );
}
