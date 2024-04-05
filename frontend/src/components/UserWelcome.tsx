interface UserWelcomeProps {
  name: string;
}

export default function UserWelcome({ name }: UserWelcomeProps) {
  return (
    <div>
      <div className="welcome">
        <span>Bonjour</span>
        <span>{name}</span>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
