//import logo from "./logo.svg";
import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

function Signupw(props) {
  const [state,setState]=useState({
    fullname:"",
    email : "",
    password : "",
    confirmPassword: "",
    country:'',
    successMessage: null
  })
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
 }
 const sendDetailsToServer = () => {
  if(state.email.length && state.password.length) {
    //  props.showError(null);
      const payload={
          "fullname":state.fullname,
          "email":state.email,
          "password":state.password,
          "country":state.country
      }
      axios.post(API_BASE_URL+'/user/register', payload)
          .then(function (response) {
              if(response.status === 200){
                  console.log(response.data)
                  setState(prevState => ({
                      ...prevState,
                      'successMessage' : 'Registration successful. Redirecting to home page..'
                  }))
                  localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                  redirectToLogin();
                  //props.showError(null)
              } else{
                //  props.showError("Ocurrio algun error");
                console.log("Ocurrio algun error")
              }
          })
          .catch(function (error) {
              console.log(error);
              console.log("eeeeee")
          });    
  } else {
     // props.showError('Por favor validar usuario y contraseña')    
     alert("Por favor validar usuario y contraseña")
  }
  
}
const redirectToHome = () => {
//  props.updateTitle('Home')
  props.history.push('/home');
}
const redirectToLogin = () => {
  //props.updateTitle('Login')
  props.history.push('/login'); 
}
const handleSubmitClick = (e) => {
  e.preventDefault();
  if(state.password === state.confirmPassword) {
      sendDetailsToServer()    
  } else {
     // props.showError('Password incorrecto');
     alert("Password incorrecto")
  }
}
  return (
    <React.Fragment>
      <div class="login-form">
        <form  method="post">
          <h2 class="text-center">Registrate</h2>
          <div class="form-group">
            <input
              type="text"
              id="fullname"
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
              id="email"
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
              id="password"
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
              id="confirmPassword" 

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
              id="country"
              class="form-control"
              placeholder="Country"
              value={state.country}
              required="required"
              onChange={handleChange}
              
            />
          </div>

          <div class="form-group">
            <button type="submit"
             class="btn btn-primary btn-block"
             onClick={handleSubmitClick}
              >
               Registro
            </button>
          </div>
          <div class="clearfix">
            <label class="float-left form-check-label">
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#" class="float-right">
              ¿Olvidaste tu Password?
            </a>
          </div>
        </form>
        <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
        </div>
        <div className="mt-2">
                <span>¿Ya tienes una cuenta? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Inicia Sesion</span> 
            </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Signupw);
