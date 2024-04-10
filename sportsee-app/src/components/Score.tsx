interface ScoreProps {
  children: React.ReactNode;
}

const Score: React.FC<ScoreProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Score;