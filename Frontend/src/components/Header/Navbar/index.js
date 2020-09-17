import React from "react";
import { Link } from "react-router-dom";
import {
  API_BASE_URL,
  ACCESS_TOKEN_NAME,
  ACCESS_USER_ID,
} from "../../../constants/apiContants";

export default function Navbar() {
  let guestAccount = <ul className="navbar-nav ml-auto">

    <li className="nav-item">
      <Link to="/account" className="nav-link">{localStorage.getItem(ACCESS_USER_ID) ? JSON.parse(localStorage.getItem("USER")).fullname : 'Mi cuenta'}</Link>
    </li>

    <li className="nav-item">
      <Link to="/login" className="nav-link">
        <span className="glyphicon glyphicon-user"></span> Registro
      </Link>
    </li>

    <li className="nav-item">
      <Link to="/signup" className="nav-link">
        <span className="glyphicon glyphicon-log-in"></span> Ingresa
      </Link>
    </li>
  </ul>;
  if (localStorage.getItem(ACCESS_USER_ID)) {
    guestAccount = <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <Link to="/account" className="nav-link">{localStorage.getItem(ACCESS_USER_ID) ? JSON.parse(localStorage.getItem("USER")).fullname : 'Mi cuenta'}</Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <span className="glyphicon glyphicon-user"></span> Registro
        </Link>
      </li>

      <li className="nav-item">
        <Link to="" className="nav-link" onClick={() => logout()}>
          <span className="glyphicon glyphicon-log-in"></span> Salir
        </Link>
      </li>

    </ul>;
  }
  const logout = () => {
    localStorage.clear()
  }
  

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-ligth">
      <Link to="/home" className="navbar-brand">
        TELECHAMBA
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Barra de navegacion">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">

          <li className="navbar-item ">
            <Link to="/home" className="nav-link">Telechamberos</Link>
          </li>

          <li className="navbar-item ">
            <Link to="/dashboard" className="nav-link">Proyectos</Link>
          </li>

        </ul>

        {/* Parte derecha de la navegacion */}
        {guestAccount}
      </div>
    </nav>
  );
}
