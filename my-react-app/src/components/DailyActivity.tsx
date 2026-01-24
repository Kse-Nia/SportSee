import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

import { formatDailyActivityData } from "../utils/formatData.js"; // Import formatting function

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
        <p className="activity__tooltip-item">{payload[0].value}kg</p>
        <p className="activity__tooltip-item">{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

const DailyActivity: React.FC<ActivityProps> = ({ dailyActivity }) => {
  const formattedData = formatDailyActivityData(dailyActivity); // Format data for indexing

  return (
    <div className="activity">
      <header className="activity__header">
        <h2 className="activity__title">Activité quotidienne</h2>
        <ul className="activity__legend">
          <li className="activity__legend-item">
            <span className="activity__icon activity__icon--weight" />
            <span className="activity__legend-text">Poids (kg)</span>
          </li>
          <li className="activity__legend-item">
            <span className="activity__icon activity__icon--calories" />
            <span className="activity__legend-text">
              Calories brûlées (kCal)
            </span>
          </li>
        </ul>
      </header>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedData}
          barGap={8}
          barCategoryGap={1}
          margin={{ top: 30, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            domain={["dataMin - 1", "dataMax + 2"]}
          />
          <YAxis yAxisId="calories" dataKey="calories" hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          >
            <LabelList
              dataKey="index" // Index for each activity
              position="bottom"
              offset={10}
              style={{ fontSize: "16px", fill: "#9B9EAC" }}
            />
          </Bar>
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
