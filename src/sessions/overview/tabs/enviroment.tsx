/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import enviromentData from "@/constants/environment.json";
import { AlertTriangle } from "lucide-react";

export default function EnviromentTab({ city }: any) {
  const [activeTab, setActiveTab] = useState("co2_emissions_per_capita");

  const cityData = enviromentData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Environment & Sustainace
        </h1>
        <p className="text-red-600 mt-3 text-sm max-w-md">
          Sorry, we do not have enviromental data of this city at the moment.
          Please check back later or select a different city.
        </p>
      </div>
    );
  }

  const tabOptions = [
    {
      value: "co2_emissions_per_capita",
      label: "CO₂ per Capital",
      content: (
        <MetricRenderer
          city={city}
          data={enviromentData}
          metricKey="co2_emissions_per_capita"
          title="CO₂ per Capital"
          type="line"
        />
      ),
    },
    {
      value: "renewable_energy_percent",
      label: "Renewable Energy (%)",
      content: (
        <MetricRenderer
          city={city}
          data={enviromentData}
          metricKey="renewable_energy_percent"
          title="Renewable Energy (%)"
          type="line"
        />
      ),
    },
    {
      value: "forest_area_percent",
      label: "Forest Area (%)",
      content: (
        <MetricRenderer
          city={city}
          data={enviromentData}
          metricKey="forest_area_percent"
          title="Forest Area (%)"
          type="line"
        />
      ),
    },
    {
      value: "air_quality_index",
      label: "Air Quality Index",
      content: (
        <MetricRenderer
          city={city}
          data={enviromentData}
          metricKey="air_quality_index"
          title="Air Quality Index"
          type="line"
        />
      ),
    },
    {
      value: "environmental_performance_index",
      label: "EPI Score",
      content: (
        <MetricRenderer
          city={city}
          data={enviromentData}
          metricKey="environmental_performance_index"
          title="EPI Score"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Environment & Sustainace for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
