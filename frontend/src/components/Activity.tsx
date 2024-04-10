interface ActivityProps {
  children: React.ReactNode;
}

const Activity: React.FC<ActivityProps> = ({ children }) => {
  const width = 928;
  const height = 500;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;

  return (
    <div className="activity">
      <div className="activity_container">
        <p className="activity-title">Activité quotidienne</p>
        <p className="activity-weight">Poids (kg)</p>
        <p className="activity-calories">Calories brûlées (kCal)</p>
      </div>
      <div className="activity-data"></div>
    </div>
  );
};

export default Activity;
