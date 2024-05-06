import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from "recharts";
interface RadarProps {
  children: React.ReactNode;
}

const Radar: React.FC<RadarProps> = ({ dailyActivity }) => {
  return (
    <div>
      <RadarChart
        outerRadius={90}
        width={730}
        height={250}
        data={dailyActivity}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Radar;
