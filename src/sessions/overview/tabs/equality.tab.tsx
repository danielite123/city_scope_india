/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import equalityData from "@/constants/equality.json";
import { AlertTriangle } from "lucide-react";

export default function EqualityTab({ city }: any) {
  const [activeTab, setActiveTab] = useState("gini_coefficient");

  const cityData = equalityData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Economic Equality
        </h1>
        <p className="text-red-600 mt-3 text-sm max-w-md">
          Sorry, we do not have economic equality data of this city at the
          moment. Please check back later or select a different city.
        </p>
      </div>
    );
  }

  const tabOptions = [
    {
      value: "gini_coefficient",
      label: "Gini Coefficient",
      content: (
        <MetricRenderer
          city={city}
          data={equalityData}
          metricKey="gini_coefficient"
          title="Gini Coefficient"
          type="line"
        />
      ),
    },
    {
      value: "poverty_rate",
      label: "Poverty Rate (%)",
      content: (
        <MetricRenderer
          city={city}
          data={equalityData}
          metricKey="poverty_rate"
          title="Poverty Rate (%)"
          type="line"
        />
      ),
    },
    {
      value: "social_protection_coverage",
      label: "Social Protection (%)",
      content: (
        <MetricRenderer
          city={city}
          data={equalityData}
          metricKey="social_protection_coverage"
          title="Social Protection (%)"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Economic Equality for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
