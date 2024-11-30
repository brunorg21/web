import CountryTable from "@/components/country-table";

export default function Countries() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Countries of the World
      </h1>
      <CountryTable />
    </main>
  );
}
