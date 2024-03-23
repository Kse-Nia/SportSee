import React from "react";

function Welcome({ name }: { name: string }) {
  return (
    <div>
      <div>
        <p>Bonjour</p> <span>{name}</span>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Welcome;
