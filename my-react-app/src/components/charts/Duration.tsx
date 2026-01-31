import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

/* interface DurationProps {
  sessionDuration: {
    day: string;
    sessionLength: number;
  }[];
} */

const CustomCursor = ({ points, width, height }: any) => {
  const { x } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      stroke="none"
      x={x}
      y={0}
      width={width - x}
      height={height + 100}
    />
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="duration__tooltip">
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

const Duration: React.FC<DurationProps> = ({ sessionDuration }) => {
  return (
    <div className="duration">
      <div className="duration__title">
        Durée moyenne des sessions
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessionDuration}
          margin={{ top: 0, right: 15, left: 15, bottom: 10 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255, 255, 255, 0.5)",
              fontSize: 12,
              fontWeight: 500,
            }}
            dy={10}
            interval="preserveStartEnd"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            hide={true}
            domain={["dataMin - 10", "dataMax + 20"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              r: 4,
              strokeWidth: 4,
              stroke: "rgba(255, 255, 255, 0.3)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Duration;