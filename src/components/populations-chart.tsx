"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface PopulationsChartProps {
  countryInfo: {
    populations: {
      year: number;
      value: number;
    }[];
  };
}

export function PopulationsChart({ countryInfo }: PopulationsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={countryInfo.populations}>
        <XAxis
          dataKey="year"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString("pt-BR")}`}
        />
        <Bar dataKey="value" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
