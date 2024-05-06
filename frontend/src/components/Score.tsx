import { PieChart, Pie, Sector, Cell } from "recharts"; // Sector graph
interface ScoreProps {
  data: {
    score: number;
    todayScore: number;
  }[];
}

const Score: React.FC<ScoreProps> = ({ score, todayScore }) => {
  console.log("score", score);
  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          data={score}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          <Cell key="cell-1" fill="#9B9EAC" />
        </Pie>
      </PieChart>
    </div>
  );
};

export default Score;
