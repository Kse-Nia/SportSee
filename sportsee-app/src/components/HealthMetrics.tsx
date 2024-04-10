import Image from "next/image";
import Calories from "../../public/assets/icons/calories.svg";
import Carbs from "../../public/assets/icons/carbs.svg";
import Fat from "../../public/assets/icons/fat.svg";
import Protein from "../../public/assets/icons/protein.svg";

interface HealthMetricsProps {
  children: React.ReactNode;
  dataType: string;
  dataValue: string;
}

const Icon: React.FC<{ dataType: string }> = ({ dataType }) => {
  switch (dataType) {
    case "proteinCount":
      return <Protein />;
    case "calorieCount":
      return <Calories />;
    case "carbohydrateCount":
      return <Carbs />;
    case "lipidCount":
      return <Fat />;
    default:
      return null;
  }
};

const Title: React.FC<{ dataType: string }> = ({ dataType }) => {
  switch (dataType) {
    case "calorieCount":
      return <p>Calories</p>;
    case "proteinCount":
      return <p>Protéines</p>;
    case "carbohydrateCount":
      return <p>Glucides</p>;
    case "lipidCount":
      return <p>Lipides</p>;
    default:
      return null;
  }
};

const HealthMetrics: React.FC<HealthMetricsProps> = ({
  children,
  dataType,
  dataValue,
}) => {
  return (
    <div className="healthMetrics">
      <div className="healthMetrics-icon">
        <Icon dataType={dataType} />
      </div>
      <div className="healthMetrics_container">
        <div className="healthMetrics_container-data">
          <p className="healthMetrics_container-data-nbr">{dataValue}</p>
          <p className="healthMetrics_container-data-type">
            <Title dataType={dataType} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
