import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { formatScoreData } from "../../utils/formatData.js";
import type { ScoreProps } from "../../utils/types.js"; 
const Score: React.FC<ScoreProps> = ({ score }) => {
  const data = formatScoreData(score); // Format score for the radialbar chart

  return (
    <div className="radial-chart">
      <p className="radial-chart__title">Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={90 + 360 * ((data[0]?.value ?? 0) / 100)} // Calculate angle + handle case with TS when data is undefined
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={10}
            fill="#FF0000"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="radial-chart__label"
          >
            {`${data[0].value}%`}
          </text>
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="radial-chart__label-text"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
