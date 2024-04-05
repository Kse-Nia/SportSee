interface UserWelcomeProps {
  name: string;
}

export default function UserWelcome({ name }: UserWelcomeProps) {
  return (
    <div className="user_container">
      <div className="user_container-welcome">
        <span>Bonjour  </span>
        <span className="user_container-name">{name}</span>
      </div>
      <p className="user_container-congrat">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
