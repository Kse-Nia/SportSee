import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
  LabelList,
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

  const formattedData = dailyActivity.map((item, index) => ({
    ...item,
    index: index + 1, // Add 1 to index to start at 1
  }));
  return (
    <div className="activity">
      <div className="activity__header">
        <h2 className="activity__title">Activité quotidienne</h2>
        <div className="activity__legend">
          <div className="activity__info">
            <div className="activity__icon activity__icon--weight"></div>
            <p className="activity__text">Poids (kg)</p>
          </div>
          <div className="activity__info">
            <div className="activity__icon activity__icon--calories"></div>
            <p className="activity__text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>

      <ResponsiveContainer height={200}>
        <BarChart data={formattedData} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="index"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount={4}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
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

export default Activity;
