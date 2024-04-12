import Image from "next/image";
import Calories from "../../public/assets/icons/calories.svg";
import Protein from "../../public/assets/icons/protein.svg";
import Carbs from "../../public/assets/icons/carbs.svg";
import Fat from "../../public/assets/icons/fat.svg";

interface HealthMetricsProps {
  dataType: string;
  dataValue: string;
  proteinCount: string;
  calorieCount: string;
  carbohydrateCount: string;
  lipidCount: string;
}

const HealthMetrics: React.FC<HealthMetricsProps> = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) => {
  return (
    <div className="healthMetrics">
      <div className="healthMetrics_box">
        <div className="healthMetrics-icon">
          <Image src={Calories} alt="Calories" width={60} height={60} />
        </div>
        <div className="healthMetrics_container">
          <div className="healthMetrics_container-data">
            <p className="healthMetrics_container-data-nbr">{calorieCount}</p>
            <p className="healthMetrics_container-data-type">Calories</p>
          </div>
        </div>
      </div>
      <div className="healthMetrics_box">
        <div className="healthMetrics-icon">
          <Image src={Protein} alt="Calories" width={60} height={60} />
        </div>
        <div className="healthMetrics_container">
          <div className="healthMetrics_container-data">
            <p className="healthMetrics_container-data-nbr">{proteinCount}</p>
            <p className="healthMetrics_container-data-type">Protéines</p>
          </div>
        </div>
      </div>
      <div className="healthMetrics_box">
        <div className="healthMetrics-icon">
          <Image src={Carbs} alt="Calories" width={60} height={60} />
        </div>
        <div className="healthMetrics_container">
          <div className="healthMetrics_container-data">
            <p className="healthMetrics_container-data-nbr">
              {carbohydrateCount}
            </p>
            <p className="healthMetrics_container-data-type">Glucides</p>
          </div>
        </div>
      </div>{" "}
      <div className="healthMetrics_box">
        <div className="healthMetrics-icon">
          <Image src={Fat} alt="Calories" width={60} height={60} />
        </div>
        <div className="healthMetrics_container">
          <div className="healthMetrics_container-data">
            <p className="healthMetrics_container-data-nbr">{lipidCount}</p>
            <p className="healthMetrics_container-data-type">Lipides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
