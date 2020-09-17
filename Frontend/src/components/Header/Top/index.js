import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//import info_1 from '../../../img/info_1.png';
//import info_2 from '../../../img/info_2.png';
//import info_3 from '../../../img/info_3.png';
//import info_4 from '../../../img/info_4.png';


import info_1 from './img/info_1.png';
import info_2 from './img/info_2.png';
import info_3 from './img/info_3.png';
import info_4 from './img/info_4.png';


export default function Top() {
  return (
    <main role="main">
      <div className="slide d-flex justify-content-center align-items-center ">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9 col-sm-11">
              <h2 className="display-5">
                Miles de <span className="font-weight-bold text-primary">telechamberos</span> listos para comenzar a trabajar en tu proyecto.
              </h2>

            </div>
          </div>

          <div className="row justify-content-center">

              <Link to="" className="col-6 btn btn-primary rounded-pill mr-2 mb-3">
                Publica un proyecto
              </Link>
              <Link to="" className="col-6 btn btn-outline-success  rounded-pill">
                Registrate
              </Link>

          </div>
        </div>

      </div>
      <div className="container-fluid mt-4 como-funciona">
      <h2 className="my-4">¿Cómo funciona?</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <h4 >Publicar</h4>
            <p>
            Cuéntanos en simples pasos qué proyecto quieres realizar. ¡Gratis y sin compromiso!
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h4>Seleccionar</h4>
            <p >
            Recibe propuestas de excelentes telechamberos. Elige al mejor para tu proyecto.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h4>Empieza ahora</h4>
            <p>
            Realizas el pago con garantía total sobre los fondos y empieza a trabajar x)
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <h4>Aceptar</h4>
            <p>
            Recibe el proyecto terminado y libera los fondos al telechambero.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid informacion my-4">
        <div className="row">
          
          <div className="col-sm-6 mb-4">
            <img src={info_1} alt=""/>
            <h4>Renueva tu red <i className="fas fa-angle-right"></i></h4>
            <p>Actualiza tu web y conviertela en una maquina de generar ventas.</p>
          </div>

          <div className="col-sm-6 mb-4">
            <img src={info_2} alt=""/>
            <h4>Marketing <i className="fas fa-angle-right"></i></h4>
            <p>Telechamberos que te ayudarán a vender en redes sociales, anunciar más barato y vender más.</p>
          </div>

          <div className="col-sm-6 mb-4">
            <img src={info_3} alt=""/>
            <h4>Traductores <i className="fas fa-angle-right"></i></h4>
            <p>El contenido vende y puedes traducirlo para acceder a más mercados.</p>
          </div>

          <div className="col-sm-6 mb-4">
            <img src={info_4} alt=""/>
            <h4>Y mucho más <i className="fas fa-angle-right"></i></h4>
            <p>Consultores de negocios y financieros, legales, administrativos, etc.</p>
          </div>


        </div>
      </div>

    </main>

  );
}
