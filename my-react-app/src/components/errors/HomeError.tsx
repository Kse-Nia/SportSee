import React from "react";

const HomeError: React.FC = () => {
  return (
    <div className="home-error">
      <h2 className="home-error__title">Erreur de chargement</h2>
      <p className="home-error__message">
        Une erreur est survenue lors du chargement des données ou de la page.
      </p>
      <p> Veuillez réessayer plus tard.</p>
    </div>
  );
};

export default HomeError;
