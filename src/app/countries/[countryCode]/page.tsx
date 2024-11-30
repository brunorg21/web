import { CountryListItem } from "@/components/country-item";
import { PopulationsChart } from "@/components/populations-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBorder } from "@/models/border";
import { api } from "@/utils/api";

export default async function Country({
  params,
}: {
  params: { countryCode: string };
}) {
  const countryInfo = await api(`/countries/${params.countryCode}`).then(
    async (res) => {
      const data = await res.json();
      return data.countryInfo;
    }
  );

  return (
    <div className="flex flex-col items-center w-full space-y-2">
      <h1 className="text-3xl font-bold">{countryInfo.commonName}</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <img
              src={countryInfo.countryFlag?.flag}
              alt={`Flag of ${countryInfo.commonName}`}
              className="w-32 h-auto mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <CardTitle className="text-2xl font-bold">
                {countryInfo.commonName}
              </CardTitle>
              <CardDescription>{countryInfo.officialName}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p>
                <strong>Region:</strong> {countryInfo.region}
              </p>
            </div>
            <div>
              <p>
                <strong>Country Code:</strong> {countryInfo.countryCode}
              </p>
            </div>
            <div>
              <p>
                <strong>Bordering Countries:</strong>
              </p>
              {countryInfo.borders && countryInfo.borders.length > 0 ? (
                <ul className="list-disc list-inside">
                  {countryInfo.borders.map((border: IBorder) => (
                    <CountryListItem key={border.countryCode} border={border} />
                  ))}
                </ul>
              ) : (
                <p>
                  No bordering countries (island nation or no data available)
                </p>
              )}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Population</CardTitle>
            </CardHeader>
            <CardContent>
              <PopulationsChart countryInfo={countryInfo} />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
