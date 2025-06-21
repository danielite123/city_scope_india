/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import economicData from "@/constants/economic.json";
import { AlertTriangle } from "lucide-react";

export default function EconomicTab({ city }: any) {
  const [activeTab, setActiveTab] = useState("gdp");

  const cityData = economicData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Economic Indicators
        </h1>
        <p className="text-red-600 mt-3 text-sm max-w-md">
          Sorry, we do not have economic data of this city at the moment. Please
          check back later or select a different city.
        </p>
      </div>
    );
  }

  const tabOptions = [
    {
      value: "gdp",
      label: "GDP",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="gdp"
          title="GDP Over Time"
        />
      ),
    },
    {
      value: "gni",
      label: "GNI",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="gni"
          title="GNI Over Time"
        />
      ),
    },
    {
      value: "unemployment_rate",
      label: "Unemployment",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="unemployment_rate"
          title="Unemployment Rate"
          type="line"
        />
      ),
    },
    {
      value: "inflation_rate",
      label: "Inflation",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="inflation_rate"
          title="Inflation Rate"
          type="area"
        />
      ),
    },
    {
      value: "foreign_direct_investment",
      label: "FDI",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="foreign_direct_investment"
          title="FDI Over Time"
          type="line"
        />
      ),
    },
    {
      value: "export_import_ratio",
      label: "Export-Import Ratio",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="export_import_ratio"
          title="Export-Import Ratio"
        />
      ),
    },
    {
      value: "public_debt_percent_gdp",
      label: "Public Debt (% of GDP)",
      content: (
        <MetricRenderer
          city={city}
          data={economicData}
          metricKey="public_debt_percent_gdp"
          title="Public Debt (% of GDP)"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Economic Indicators for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
