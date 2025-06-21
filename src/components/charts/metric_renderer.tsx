import MetricChart from "../metric_chart.components";

interface GenericMetricProps<T> {
  city: string;
  data: { city: string; years: Record<string, T> }[];
  metricKey: keyof T;
  title: string;
  type?:
    | "line"
    | "bar"
    | "area"
    | "pie"
    | "stackedBar"
    | "radar"
    | "scatter"
    | "heatmap"
    | "gauge"
    | "funnel";
}

interface ChartData {
  labels?: string[];
  values?: number[];
}

export default function MetricRenderer<T extends Record<string, number>>({
  city,
  data,
  metricKey,
  title,
  type = "bar",
}: GenericMetricProps<T>) {
  const cityData = data.find((entry) => entry.city === city);
  const yearsData = cityData?.years || {};

  const labels = Object.keys(yearsData);
  const values = labels.map((year) => yearsData[year]?.[metricKey] ?? 0);

  const chartData: ChartData = {
    labels,
    values,
  };

  return (
    <div className="h-[250px] min-w-[300px]">
      <MetricChart type={type} title={title} data={chartData} />
    </div>
  );
}
