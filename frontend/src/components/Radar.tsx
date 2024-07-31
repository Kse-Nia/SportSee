import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";
import { formatData } from "@/utils/formatData";
interface RadarProps {
  performances: {
    kind: string;
    value: number;
  }[];
}

const RadarGraphe: React.FC<RadarProps> = ({ performances }) => {
  const formatedPerformances = formatData(performances);
  console.log("performances", formatedPerformances);

  return (
    <div className="performances_container">
      <ResponsiveContainer width={280} height={280}>
        <RadarChart
          outerRadius={70} 
          data={formatedPerformances}
        >
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis
            margin={2}
            tickLine={false}
            fontSize={15}
            dataKey="kind"
            fill="#FFFFFF"
            stroke="#FFFFFF"
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarGraphe;
