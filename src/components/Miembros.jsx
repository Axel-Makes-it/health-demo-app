import React from "react";
import "../styles/Miembros.css";
import searchIcon from "../images/magnify.svg";

function Miembros() {
  return (
    <section className="miembros__container">
      <h2>Lista de miembros</h2>
      <div className="miembros__form">
        <form>
          <img src={searchIcon} alt="search" width={24} />
          <input
            type="text"
            placeholder="Buscar por nombre y apellido o CardID"
          />
        </form>
        <div className="miembros__agregar-btn">
          <button>AGREGAR MIEMBROS</button>
        </div>
      </div>
      <div className="miembros__lista">
        <div className="miembros__table">
          <ul>
            <li>
              <span>Member ID</span>
            </li>
            <li>
              <span>Card ID</span>
            </li>
            <li>
              <span>Nombre y apellido</span>
            </li>
            <li>
              <span>Centro</span>
            </li>
            <li>
              <span>Fecha de nacimiento</span>
            </li>
            <li>
              <span>Fecha de membresia</span>
            </li>
            <li>
              <span>Status</span>
            </li>
            <li>
              <span>Acciones</span>
            </li>
          </ul>
        </div>

        <div id="lista" className="miembros__table lista">
          <ul>
            <li>
              <span>Member ID</span>
            </li>
            <li>
              <span>Card ID</span>
            </li>
            <li>
              <span>Nombre y apellido</span>
            </li>
            <li>
              <span>Centro</span>
            </li>
            <li>
              <span>Fecha de nacimiento</span>
            </li>
            <li>
              <span>Fecha de membresia</span>
            </li>
            <li>
              <span>Status</span>
            </li>
            <li>
              <span>Acciones</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Miembros;
