import { ICountry } from "@/models/country";
import { api } from "@/utils/api";
import { CountryRow } from "./country-row";


export default async function CountryTable() {
  const countries = await api("/countries").then(async (res) => {
    const data = await res.json();
    return data.countries;
  });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Code
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map((country: ICountry) => (
            <CountryRow key={country.countryCode} country={country} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
