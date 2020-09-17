import React, { Component } from "react";
import Header from "../../components/Header/index";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <footer>
          <section id="barra-contacto" className="bg-primary text-white py-1 py-lg-1 text-center">
            <div className="container">
              <div className="row justify-content-sm-between align-items-sm-center">
                <div className="col-12 col-sm-auto">
                <i className="fas fa-users mr-1"></i><span>TELECHAMBA</span>
                </div>

                <div className="col-12 col-sm-auto">
                  <ul className="redes-sociales list-unstyled d-inline-flex mb-0">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
