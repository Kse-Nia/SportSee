interface RadarProps {
  children: React.ReactNode;
}

const Radar: React.FC<RadarProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Radar;