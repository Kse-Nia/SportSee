import React from "react";

interface Metric {
  icon: string;
  count: number;
  type: string;
}

interface HealthMetricsProps {
  metrics: Metric[];
}

const HealthMetrics: React.FC<HealthMetricsProps> = ({ metrics }) => {
  // Fonction helper pour générer le nom du modifier
  const getModifier = (type: string) => {
    switch (type) {
      case "Calories":
        return "calories";
      case "Protéines":
        return "protein";
      case "Glucides":
        return "carbs";
      case "Lipides":
        return "fat";
      default:
        return "";
    }
  };

  return (
    <div className="healthMetrics">
      {metrics.map((metric) => (
        <div className="healthMetrics__card" key={metric.type}>
          <div
            className={`healthMetrics__icon healthMetrics__icon--${getModifier(
              metric.type
            )}`}
          >
            <img src={metric.icon} alt={metric.type} width={32} height={32} />
          </div>
          <div className="healthMetrics__info">
            <p className="healthMetrics__value">{metric.count}</p>
            <p className="healthMetrics__label">{metric.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;
