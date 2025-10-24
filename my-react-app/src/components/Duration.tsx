import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
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
        <LineChart data={sessionDuration} margin={{ top: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFF",
              r: 5,
              strokeWidth: 10,
              strokeOpacity: 0.4,
            }}
          />
          <XAxis dataKey="day" hide />
          <Tooltip
            cursor={false}
            wrapperStyle={{ outline: "none", fontWeight: 600 }}
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // background color
              color: "black", // text color
              border: "none",
              padding: "5px",
              fontWeight: "normal",
            }}
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
