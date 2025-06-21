"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";
import { useNumberFormatter } from "@/router";
import useResizeObserver from "use-resize-observer";

type ChartType = "bar" | "line" | "area";

interface ChartData {
  labels?: string[];
  values?: number[] | [number, number][];
  series?: { name: string; values: number[] | [number, number][] }[];
  indicators?: { name: string; max?: number }[];
  xLabels?: string[];
  yLabels?: string[];
  data?: [number, number, number][] | number;
  name?: string;
  value?: number;
}

interface MetricChartProps {
  type: ChartType;
  data: ChartData;
  title: string;
}

const baseTheme: EChartsOption = {
  // backgroundColor: "#ffffff",
  title: {
    textStyle: {
      color: "#000000",
      fontFamily: "Inter, sans-serif",
      fontWeight: "bold",
    },
    left: "center",
  },
  legend: {
    textStyle: {
      color: "#000000",
      fontFamily: "Inter, sans-serif",
    },
    bottom: 0,
    type: "scroll",
  },
  tooltip: {
    trigger: "item",
    textStyle: {
      fontFamily: "Inter, sans-serif",
    },
  },
  textStyle: {
    color: "#000000",
    fontFamily: "Inter, sans-serif",
  },
};

const axisTheme: EChartsOption = {
  xAxis: {
    type: "category",
    axisLine: { lineStyle: { color: "#000000" } },
    axisLabel: { color: "#000000" },
    splitLine: { show: false },
  },
  yAxis: {
    type: "value",
    axisLine: { lineStyle: { color: "#000000" } },
    axisLabel: { color: "#000000" },
    splitLine: { show: true, lineStyle: { color: "#eeeeee", type: "dashed" } },
  },
};

const MetricChart: React.FC<MetricChartProps> = ({ type, data, title }) => {
  const chartRef = useRef<any>(null);
  const formatNumber = useNumberFormatter();

  const { ref } = useResizeObserver({
    onResize: () => {
      chartRef.current?.getEchartsInstance().resize();
    },
  });

  const option = useMemo((): EChartsOption => {
    let specificOptions: EChartsOption = {};

    switch (type) {
      case "bar":
        specificOptions = {
          ...axisTheme,
          xAxis: { ...axisTheme.xAxis, data: data.labels },
          yAxis: {
            ...(axisTheme.yAxis as EChartsOption["yAxis"]),
            axisLabel: {
              ...(axisTheme.yAxis as any)?.axisLabel,
              formatter: (value: number) => formatNumber(value),
            },
          },
          grid: {
            left: 50,
            right: 20,
            top: 50,
            bottom: 50,
          },
          series: [
            {
              data: data.values,
              type: "bar",
              itemStyle: { color: "#000000" },
              barWidth: "40%",
            },
          ],
          tooltip: { trigger: "axis" },
        };
        break;

      case "line":
        specificOptions = {
          ...axisTheme,
          xAxis: { ...axisTheme.xAxis, data: data.labels },
          series: [
            {
              data: data.values,
              type: "line",
              smooth: true,
              lineStyle: { color: "#000000" },
              itemStyle: { color: "#000000" },
            },
          ],
          tooltip: { trigger: "axis" },
        };
        break;

      case "area":
        specificOptions = {
          ...axisTheme,
          xAxis: { ...axisTheme.xAxis, data: data.labels },
          series: [
            {
              data: data.values,
              type: "line",
              smooth: true,
              areaStyle: { color: "#000000", opacity: 0.8 },
              lineStyle: { color: "#000000" },
              itemStyle: { color: "#000000" },
            },
          ],
          tooltip: { trigger: "axis" },
        };
        break;

      default:
        break;
    }

    return {
      ...baseTheme,
      title: { ...baseTheme.title, text: title },
      ...specificOptions,
    };
  }, [type, data, title, formatNumber]);

  return (
    <div ref={ref} style={{ width: "100%", height: "250px" }}>
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default MetricChart;
