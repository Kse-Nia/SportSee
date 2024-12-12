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
  

  return (
    <div className="duration">
      <div className="duration__title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessionDuration} margin={{ bottom: 10 }}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2.5}
            dot={false}
          />
          <XAxis dataKey="sessionLength" />
          <Tooltip
            cursor={false}
            wrapperStyle={{ outline: "none", fontWeight: 600 }}
            labelFormatter={(value) => `${value} min`}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="duration__legend">
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
        <p>D</p>
      </div>
    </div>
  );
};

export default Duration;
