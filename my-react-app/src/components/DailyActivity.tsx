import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { formatDailyActivityData } from "../utils/formatData";


const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity__tooltip">
        <p className="activity__tooltip-value">{payload[0].value}kg</p>
        <p className="activity__tooltip-value">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

const DailyActivity: React.FC<ActivityProps> = ({ dailyActivity }) => {
  const formattedData = formatDailyActivityData(dailyActivity);

  return (
    <div className="activity">
      <header className="activity__header">
        <h2 className="activity__title">Activité quotidienne</h2>
        <ul className="activity__legend">
          <li className="activity__legend-item">
            <span className="activity__legend-dot activity__legend-dot--weight" />
            <span className="activity__legend-text">Poids (kg)</span>
          </li>
          <li className="activity__legend-item">
            <span className="activity__legend-dot activity__legend-dot--calories" />
            <span className="activity__legend-text">Calories brûlées (kCal)</span>
          </li>
        </ul>
      </header>

      <div className="activity__chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            barGap={8}
            margin={{ top: 0, right: 30, left: 43, bottom: 23 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={{ stroke: "#DEDEDE" }}
              tick={{ fill: "#9B9EAC", fontSize: 14 }}
              dy={16}
            />
            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9B9EAC", fontSize: 14 }}
              domain={["dataMin - 1", "dataMax + 1"]}
              tickCount={3}
              dx={15}
            />
            <YAxis yAxisId="calories" hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            />
            <Bar
              yAxisId="kilogram"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="calories"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyActivity;