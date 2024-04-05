interface HealthMetricsProps {
  children: React.ReactNode;
}

const HealthMetrics: React.FC<HealthMetricsProps> = ({ children }) => {
  return (
    <div className="healthMetrics">
      <div className="healthMetrics-icon"></div>
      <div className="healthMetrics_container">
        <div className="healthMetrics_container-data">
          <p className="healthMetrics_container-data-nbr"></p>
          <p className="healthMetrics_container-data-type"></p>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
