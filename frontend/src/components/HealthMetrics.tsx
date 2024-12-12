import Image from "next/image";
interface Metric {
  icon: string;
  count: number;
  type: string;
}
interface HealthMetricsProps {
  metrics: Metric[];
}

const HealthMetrics: React.FC<HealthMetricsProps> = ({ metrics }) => {
  return (
    <div className="healthMetrics">
      {metrics.map((metric, index) => (
        <div className="healthMetrics_box" key={index}>
          <div className="healthMetrics-icon">
            <Image src={metric.icon} alt={metric.type} width={60} height={60} />
          </div>
          <div className="healthMetrics_container">
            <div className="healthMetrics_container-data">
              <p className="healthMetrics_container-data-nbr">{metric.count}</p>
              <p className="healthMetrics_container-data-type">{metric.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;
