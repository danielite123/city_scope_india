/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import healthData from "@/constants/health.json";
import { AlertTriangle } from "lucide-react";

export default function HealthTab({ city }: any) {
  const [activeTab, setActiveTab] = useState(
    "healthcare_expenditure_per_capita"
  );

  const cityData = healthData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Health & Well-being
        </h1>
        <p className="text-red-600 mt-3 text-sm max-w-md">
          Sorry, we do not have health & well-being data of this city at the
          moment. Please check back later or select a different city.
        </p>
      </div>
    );
  }

  const tabOptions = [
    {
      value: "healthcare_expenditure_per_capita",
      label: "Health Spend per Capita",
      content: (
        <MetricRenderer
          city={city}
          data={healthData}
          metricKey="healthcare_expenditure_per_capita"
          title="Health Spend per Capita"
        />
      ),
    },
    {
      value: "physicians_per_1000",
      label: "Doctors per 1,000",
      content: (
        <MetricRenderer
          city={city}
          data={healthData}
          metricKey="physicians_per_1000"
          title="Doctors per 1,000"
          type="line"
        />
      ),
    },
    {
      value: "hospital_beds_per_1000",
      label: "Beds per 1,000",
      content: (
        <MetricRenderer
          city={city}
          data={healthData}
          metricKey="hospital_beds_per_1000"
          title="Beds per 1,000"
          type="line"
        />
      ),
    },
    {
      value: "access_to_clean_water_percent",
      label: "Clean Water Access (%)",
      content: (
        <MetricRenderer
          city={city}
          data={healthData}
          metricKey="access_to_clean_water_percent"
          title="Clean Water Access (%)"
          type="line"
        />
      ),
    },
    {
      value: "vaccination_coverage_percent",
      label: "Vaccination Rate (%)",
      content: (
        <MetricRenderer
          city={city}
          data={healthData}
          metricKey="vaccination_coverage_percent"
          title="Vaccination Rate (%)"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Health & Well-being for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
