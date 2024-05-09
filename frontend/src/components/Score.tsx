import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { formatScoreData } from "@/utils/formatData";

const Score: React.FC<ScoreProps> = ({ score }) => {
  const data = formatScoreData(score); // Format score for the radialbar chart

  return (
    <div className="radial-bar">
      <p className="radial-bar-title">Score</p>
      <div className="radial-bar-container">
        <RadialBarChart
          width={300}
          height={150}
          cx={150}
          cy={150}
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          startAngle={180}
          endAngle={0}
          data={data}
        >
          <RadialBar
            minAngle={15}
            cornerRadius={10}
            clockWise={true}
            dataKey="value"
          />
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
        </RadialBarChart>
        <div className="radial-bar-score">
          <p className="percentage">{score * 100}%</p>
          <p className="label">de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
