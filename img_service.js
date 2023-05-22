import React from 'react';
import { Link } from 'react-router-dom';

export const ArchitecturalDesignLink = () => (
  <Link to="/Archi">
    <img className="img1" src={require("./images/artitectural.png")} alt="" />
  </Link>
);

export const ConstructionLink = () => (
  <Link to="/Construction">
    <img className="img1" src={require("./images/construction.png")} alt="" />
  </Link>
);

export const InteriorLink = () => (
  <Link to="/Interior">
    <img className="img1" src={require("./images/interior.png")} alt="" />
  </Link>
);

export const IndustryLink = () => (
  <Link to="/Industry">
    <img className="img1" src={require("./images/industry.png")} alt="" />
  </Link>
);
export const TechnicalLink = () => (
    <Link to="/Techinical">
      <img className="img1" src={require("./images/techinical.png")} alt="" />
    </Link>
  );
