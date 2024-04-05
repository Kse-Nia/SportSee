interface ActivityProps {
  children: React.ReactNode;
}

const Activity: React.FC<ActivityProps> = ({ children }) => {
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
