/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricRenderer from "@/components/charts/metric_renderer";
import Tabs from "@/components/tab.component";
import { useState } from "react";
import socialData from "@/constants/social.json";
import { AlertTriangle } from "lucide-react";

export default function SocialTab({ city }: any) {
  const [activeTab, setActiveTab] = useState("hdi");

  const cityData = socialData.find((entry: any) => entry.city === city);

  if (!cityData) {
    return (
      <div className="border border-red-200 p-6 rounded-xl shadow-md bg-red-50 min-h-[380px] flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">
          Social Indicators
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
      value: "hdi",
      label: "HDI",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="hdi"
          title="HDI Over Time"
          type="line"
        />
      ),
    },
    {
      value: "life_expectancy",
      label: "Life Expectancy",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="life_expectancy"
          title="Life Expectancy"
        />
      ),
    },
    {
      value: "infant_mortality_rate",
      label: "Infant Mortality",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="infant_mortality_rate"
          title="Infant Mortality Rate"
          type="line"
        />
      ),
    },
    {
      value: "literacy_rate",
      label: "Literacy",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="literacy_rate"
          title="Literacy Rate"
          type="area"
        />
      ),
    },
    {
      value: "education_index",
      label: "Education",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="education_index"
          title="Education Index"
          type="line"
        />
      ),
    },
    {
      value: "gender_inequality_index",
      label: "Gender Inequality",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="gender_inequality_index"
          title="Gender Inequality"
        />
      ),
    },
    {
      value: "population_growth_rate",
      label: "Population Growth Rate",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="population_growth_rate"
          title="Population Growth Rate"
        />
      ),
    },
    {
      value: "urban_population_percent",
      label: "Urban Population Debt (%)",
      content: (
        <MetricRenderer
          city={city}
          data={socialData}
          metricKey="urban_population_percent"
          title="Urban Population Debt (%)"
        />
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold  text-gray-800">
        Social Indicators for {city}
      </h1>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />
    </div>
  );
}
