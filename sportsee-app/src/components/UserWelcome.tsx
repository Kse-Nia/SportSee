interface UserWelcomeProps {
  userInfos: {
    firstname: string;
  };
}

export default function UserWelcome({ userInfos }: UserWelcomeProps) {
    return (
    <div className="user_container">
      <div className="user_container-welcome">
        <span>Bonjour </span>
        <span className="user_container-name">{userInfos.firstname}</span>
      </div>
      <p className="user_container-congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
