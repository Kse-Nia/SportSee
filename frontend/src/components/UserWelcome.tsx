interface UserWelcomeProps {
  userInfos: {
    firstName: string;
  };
}

export default function UserWelcome({ userInfos }: UserWelcomeProps) {
  console.log("userInfos:", userInfos);

  return (
    <div className="user_container">
      <div className="user_container-welcome">
        <span>Bonjour </span>
        <span className="user_container-name">{userInfos.firstName}</span>
      </div>
      <p className="user_container-congrat">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
