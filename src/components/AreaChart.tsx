import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 50 },
  { name: "May", value: 420 },
  { name: "Jun", value: 80 },
  { name: "Jul", value: 350 },
  { name: "Aug", value: 400 },
];

export default function ResponseChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#54010B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#54010B" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#54010B"
          strokeWidth={3}
          fill="url(#colorFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
