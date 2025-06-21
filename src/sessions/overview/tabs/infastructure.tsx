/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import infastructureData from "@/constants/infrastructure.json";
import { AlertTriangle } from "lucide-react";

export default function InfastructureTab({ city }: any) {
  const [activeTab, setActiveTab] = useState("corruption_perceptions_index");

  const cityData = infastructureData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Infrastructure Indicators
        </h1>
        <p className="text-red-600 mt-3 text-sm max-w-md">
          Sorry, we do not have infastructure data of this city at the moment.
          Please check back later or select a different city.
        </p>
      </div>
    );
  }

  const tabOptions = [
    {
      value: "corruption_perceptions_index",
      label: "Corruption Index",
      content: (
        <MetricRenderer
          city={city}
          data={infastructureData}
          metricKey="corruption_perceptions_index"
          title="Corruption Index"
        />
      ),
    },
    {
      value: "internet_penetration_percent",
      label: "Internet Access (%)",
      content: (
        <MetricRenderer
          city={city}
          data={infastructureData}
          metricKey="internet_penetration_percent"
          title="Internet Access (%)"
          type="line"
        />
      ),
    },
    {
      value: "mobile_phone_subscriptions",
      label: "Mobile Subscriptions (%)",
      content: (
        <MetricRenderer
          city={city}
          data={infastructureData}
          metricKey="mobile_phone_subscriptions"
          title="Mobile Subscriptions (%)"
          type="line"
        />
      ),
    },
    {
      value: "infrastructure_quality_index",
      label: "Infrastructure Quality",
      content: (
        <MetricRenderer
          city={city}
          data={infastructureData}
          metricKey="infrastructure_quality_index"
          title="Infrastructure Quality"
          type="line"
        />
      ),
    },
    {
      value: "political_stability_index",
      label: "Political Stability",
      content: (
        <MetricRenderer
          city={city}
          data={infastructureData}
          metricKey="political_stability_index"
          title="Political Stability"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Infrastructure for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
