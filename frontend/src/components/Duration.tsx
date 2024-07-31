import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DurationProps {
  sessionDuration: {
    day: string;
    sessionLength: number;
  }[];
}

const Duration: React.FC<DurationProps> = ({ sessionDuration }) => {
  console.log("sessionDuration", sessionDuration);

  return (
    <div className="line-chart">
      <p className="line-chart-title">Durée moyenne des sessions</p>
      <ResponsiveContainer width={258} height={263}>
      <LineChart width={260} height={260} data={sessionDuration}>
        <XAxis dataKey="day" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 1 }}
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Duration;
