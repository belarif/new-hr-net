import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1>
          Error 404 ! <br /> La page retrouvée est introuvable
        </h1>
        <Link to="/home">Retour à l'accueil</Link>
      </div>
    </React.Fragment>
  );
};

export default Error;
