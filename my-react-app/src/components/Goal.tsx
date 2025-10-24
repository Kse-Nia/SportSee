interface GoalProps {
  children: React.ReactNode;
}

const Goal: React.FC<GoalProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Goal;
