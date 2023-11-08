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
      </div>
    </section>
  );
}

export default Miembros;
