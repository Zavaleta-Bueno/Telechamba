import React, { Component,useState } from "react";
//import Header from "../../components/Header/index";
import "./style.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

import {
  API_BASE_URL,
  ACCESS_USER_ID,
  ACCESS_TOKEN_NAME,
} from "../../constants/apiContants";
function Postprojectfs (props) {

  const [state,setState]=useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    _id: "",
    users: [],
  })


 const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState=>({
      ...prevState,

      [name]: value,
    }));
    console.log(name);
    console.log(value);
  };
 
 const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      //  props.showError(null);
      const payload = {
        fullname: state.fullname,
        email: state.email,
        password: state.password,
        country: state.country,
      };
      axios
        .post("http://127.0.0.1:4000/api" + "/user/register", payload) //CRUD usuario
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data.usuario);
            //   console.log("usuario:  asd"+response.dat)
            //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
            localStorage.setItem(ACCESS_USER_ID, response.data.usuario._id);
            localStorage.setItem("USER",JSON.stringify(response.data.usuario))

            redirecToadd();

            //props.history.push("/post-project-fs/add");
          
            //props.showError(null)
          } else {
            //  props.showError("Ocurrio algun error");
            console.log("Ocurrio algun error");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("eeeeee");
        });
    } else {
      // props.showError('Ingrese su  usuario y contraseña')
      alert("Ingrese su  usuario y contraseña");
    }
  };
 const redirecToadd = () => {
  props.history.push("/post-project-fs/add");
   console.log("hola")
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();

      console.log("hola");
    } else {
      // props.showError('Password No coinciden');
      alert("Password No coinciden");
    }
  };


    
    if (localStorage.getItem(ACCESS_USER_ID)) {
    
    }
    return <React.Fragment>

<section className="addnew">
        <header>
          <div className="container">
            <a href="" className="navbar-brand">
              <img
                src="https://i.ibb.co/Rg7Wns5/telechamba.jpg"
                height="100"
                alt=""
              />
            </a>
          </div>
        </header>
        <div class="login-form">
          <form type="sumbit" onSubmit={handleSubmit}>
            <h2 class="text-center">Registra tu Servicio</h2>
            <div class="form-group">
              <input
                type="text"
                name="fullname"
                class="form-control"
                placeholder="Fullname"
                value={state.fullname}
                required="required"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Enter email"
                value={state.email}
                required="required"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                value={state.password}
                required="required"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                name="confirmPassword"
                class="form-control"
                placeholder="Confirmed password"
                value={state.confirmPassword}
                required="required"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="country"
                class="form-control"
                placeholder="Country"
                value={state.country}
                required="required"
                onChange={handleChange}
              />
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Registrate
              </button>
            </div>
            <div class="clearfix">
              <label class="float-left form-check-label">
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#" class="float-right">
                ¿Olvidates tu contraseña?
              </a>
            </div>
          </form>
          <div className="alert alert-success mt-2" role="alert"></div>
          <div className="mt-2">
            <span>¿Ya tienes una cuenta? </span>
            <span
              className="loginText"
              // onClick={() => redirectToLogin()}
            >
              Ingresa  Aqui
            </span>
          </div>
        </div>
      </section>
    
    </React.Fragment>;
  }


export default withRouter(Postprojectfs);
