import React from 'react';
import { Link } from 'react-router-dom';

export const ArchitecturalDesignlik= () => (
  <Link to="/Architectural_design">
    <img className="img1" src={require("./images/artitectural.png")} alt="" />
    <br />
    <b>Architectural</b>
  </Link>
);

export const Constructionlik= () => (
  <Link to="/Construction">
    <img className="img1" src={require("./images/construction.png")} alt="" />
    <br />
    <b>Construction</b>
  </Link>
);

export const Interiorlik= () => (
  <Link to="/Interior">
    <img className="img1" src={require("./images/interior.png")} alt="" />
    <br />
    <b>Interior</b>
  </Link>
);

export const Industrylik= () => (
  <Link to="/Industry">
    <img className="img1" src={require("./images/industry.png")} alt="" />
    <br />
    <b>Industrial Infrastructure Development</b>
  </Link>
);
export const Technicallik= () => (
    <Link to="/Techinical">
      <img className="img1" src={require("./images/techinical.png")} alt="" />
      <br />
      <b>Techinical</b>   
    </Link>
  );
