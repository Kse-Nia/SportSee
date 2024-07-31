import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

interface ActivityProps {
  dailyActivity: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    const { kilogram, calories } = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="label">{kilogram} kg</p>
        <p className="label">{calories} kcal</p>
      </div>
    );
  }
  return null;
};

const Activity: React.FC<ActivityProps> = ({ dailyActivity }) => {
  const daysIndex = dailyActivity.map((day, index) => ({ ...day, index })); // New array with days as index + data
  const allWeights = daysIndex.map((item) => item.kilogram);

  // Min and Max kilogram for the YAxis
  const minWeight = Math.min(...allWeights);
  const maxWeight = Math.max(...allWeights);
  const referenceWeight = (minWeight + maxWeight) / 2;

  // Max calories for the YAxis
  const minCalories = Math.min(...daysIndex.map((item) => item.calories));
  const maxCalories = Math.max(...daysIndex.map((item) => item.calories));

  return (
    <div className="activity">
      <div className="activity_header-legend">
        <p>Activité quotidienne</p>
        <div className="activity_header-legend-item">
          <span className="activity_header-legend-colorweight"></span>
          <span>Poids (kg)</span>
        </div>
        <div className="activity_header-legend-item">
          <span className="activity_header-legend-colorcalories"></span>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={daysIndex}
          width={600}
          height={320}
          barGap={8}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            scale="point"
            dataKey="index"
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            tick={{ fontSize: 16, fill: "#9B9EAC", height: 30 }}
          />
          <YAxis
            dataKey="kilogram"
            domain={[minWeight - 20, maxWeight + 20]}
            orientation="right"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            dataKey="calories"
            domain={[minCalories - 20, maxCalories + 20]}
            orientation="right"
            stroke="#82ca9d"
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={referenceWeight}
            stroke="grey"
            strokeDasharray="3 3"
          />
          <ReferenceLine y={maxWeight} stroke="grey" strokeDasharray="3 3" />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
