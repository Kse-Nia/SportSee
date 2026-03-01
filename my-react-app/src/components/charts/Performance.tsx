import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";
import { formatPerformancesData } from "../../utils/formatData.js";
import type { RadarProps } from "../../utils/types.js";

const PerformanceGraphe: React.FC<RadarProps> = ({ performances }) => {
  if (!performances) return null; // Check if performances data is available
  const formatedPerformances = formatPerformancesData(performances);

  return (
    <div className="performances_container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="50%"
          data={formatedPerformances}
        >
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#FFFFFF", fontSize: 12, fontWeight: 500 }}
            tickLine={false}
            stroke="none"
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceGraphe;
