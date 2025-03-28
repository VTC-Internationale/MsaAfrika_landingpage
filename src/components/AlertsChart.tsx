"use client";

// import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  // ChartLegend,
  // ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "Jan", total: 900, resolved: 2000 },
  { month: "Feb", total: 3400, resolved: 800 },
  { month: "Mar", total: 2400, resolved: 2300 },
  { month: "Apr", total: 1200, resolved: 800 },
  { month: "May", total: 500, resolved: 2300 },
  { month: "Jun", total: 5000, resolved: 0 },
  { month: "Jul", total: 3800, resolved: 500 },
  { month: "Aug", total: 0, resolved: 1500 },
  { month: "Sep", total: 0, resolved: 0 },
  { month: "Oct", total: 0, resolved: 0 },
  { month: "Nov", total: 0, resolved: 0 },
  { month: "Dec", total: 0, resolved: 0 },
];

const customLegend = [
  {
    label: "Total d’alertes créés",
    value: "0",
    color: "#6A131D",
    icon: "solar:bell-bold",
    arrow: "",
    stat: "+ 1.0%"
  },
  {
    label: "Interventions résolues ",
    value: "14,534",
    color: "#FFDCE0",
    icon: "icon-park-solid:check-one",
    arrow: "",
    stat: "+ 1.0%"
  },
];

const chartConfig = {
  total: {
    label: "Total d’alertes créés",
    color: "#6A131D",
  },
  resolved: {
    label: "Interventions résolues ",
    color: "#FFDCE0",
  },
} satisfies ChartConfig;

const AlertsChart = () => {
  return (
    <Card className="border border-[#9EA2A666]">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} maxBarSize={40}>
            <CartesianGrid vertical={true} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar
              dataKey="total"
              stackId="a"
              fill="var(--color-total)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="resolved"
              stackId="a"
              fill="var(--color-resolved)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row gap-3 justify-start w-full">
        {customLegend.map((item, index) => (
          <div key={index} className={`w-full ${index === 0 ? "md:border-r md:border-[#9EA2A6]" : ""} pe-6 ps-4`}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div
                  className="h-[12.3px] w-[12.3px] rounded-full"
                  style={{ background: item.color }}
                ></div>
                <p className="text-[14px] text-[#5B696F] font-normal">
                  {item.label}
                </p>
              </div>
              <div className="relative">
                <Icon
                  icon="fontisto:ellipse"
                  className="translate-x-[-90%] translate-y-[30%] text-[#54010b37]"
                  width="6"
                  height="6"
                />
                <Icon
                  icon="fontisto:ellipse"
                  className="text-[#54010b37]"
                  width="35.43"
                  height="35.46"
                />
                <Icon
                  icon={item.icon}
                  className="absolute text-[#54010B] translate-y-[-110%] translate-x-[50%]"
                  width="29"
                  height="29"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[#000000] text-[28px] font-bold my-1">{item.value}</h2>
              <p className="text-[13px] text-[#6A131D] font-semibold">{item.stat} <span className="text-[#747681] font-medium">Mois dernier</span></p>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default AlertsChart;
