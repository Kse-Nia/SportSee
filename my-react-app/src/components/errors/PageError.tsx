import React from "react";

const PageError: React.FC = () => {
  return (
    <div className="home-error">
      <h2 className="home-error__title">Erreur de chargement de la page</h2>
      <p className="home-error__message">
        Page en construction... Veuillez revenir plus tard.
      </p>
    </div>
  );
};

export default PageError;
