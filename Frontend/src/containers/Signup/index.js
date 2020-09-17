import React, { Component } from "react";
//import Header from "../../components/Header/index";
//import "./style.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container main">
          <div className="access access-floating choose">
            <div className="access-wrapper">
              <div className="access-box">
                <div className="access-logo">
                  <Link to="/">
                    
                    <img
                      src="https://i.ibb.co/Rg7Wns5/telechamba.jpg"
                      alt=""
                      weighy="50"
                      height="200"
                    />

                    
                  </Link>
                </div>
                <div className="box-common box-lg">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 text-center">
                      <h3>¿Quieres contratar a un freelancer?</h3>
                      <p>
                        <Link to="/post-project-fs" className="btn btn-primary btn-lg">
                          contrata un freelancer
                        </Link>
                      </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-center">
                      <h3>¿Quieres trabajar como un freelancer?</h3>
                      <p>
                        <Link to="/signup/w" className="btn btn-primary btn-lg">
                          Trabajar como freelancer
                        </Link>
                      </p>
                    </div>
                    <div className="col-lg-12 col-sm-12 text-center">
                      <hr/>
                              ¿Ya estas registrado?    
                      
                        <Link to="/login" className="btn btn-primary btn-lg">
                          Inicia Sesion
                        </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
