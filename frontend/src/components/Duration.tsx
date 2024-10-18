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
      {/*    <p className="line-chart-title">Durée moyenne des sessions</p>
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
      </ResponsiveContainer> */}

      <p className="line-chart-title">Durée moyenne des sessions</p>
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

      <div className="line-chart-legend">
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
