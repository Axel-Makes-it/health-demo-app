import React from "react";
import "../styles/Miembros.css";
import searchIcon from "../images/magnify.svg";
import ACCIONES from "../images/MoreOutlined.png";

const miembros = [
  {
    memberID: "001",
    cardID: "12345",
    nombreApellido: "John Doe",
    centro: "Center A",
    fechaNacimiento: "1990/01/15",
    fechaMembresia: "2023/03/01",
    status: "Activo",
  },
  {
    memberID: "002",
    cardID: "54321",
    nombreApellido: "Jane Smith",
    centro: "Center B",
    fechaNacimiento: "1985/07/22",
    fechaMembresia: "2023/03/15",
    status: "Desactivado",
  },
  {
    memberID: "003",
    cardID: "67890",
    nombreApellido: "Alice Johnson",
    centro: "Center C",
    fechaNacimiento: "1992/04/18",
    fechaMembresia: "2023/04/02",
    status: "Activo",
  },
  {
    memberID: "004",
    cardID: "24680",
    nombreApellido: "Bob Wilson",
    centro: "Center A",
    fechaNacimiento: "1988/11/30",
    fechaMembresia: "2023/05/19",
    status: "Activo",
  },
  {
    memberID: "005",
    cardID: "13579",
    nombreApellido: "Sarah Brown",
    centro: "Center D",
    fechaNacimiento: "1993/02/12",
    fechaMembresia: "2023/06/25",
    status: "Desactivado",
  },
  {
    memberID: "006",
    cardID: "86420",
    nombreApellido: "David Lee",
    centro: "Center B",
    fechaNacimiento: "1984/09/08",
    fechaMembresia: "2023/07/11",
    status: "Activo",
  },
  {
    memberID: "007",
    cardID: "97531",
    nombreApellido: "Emily Adams",
    centro: "Center C",
    fechaNacimiento: "1991/03/24",
    fechaMembresia: "2023/08/30",
    status: "Activo",
  },
  {
    memberID: "008",
    cardID: "75309",
    nombreApellido: "Michael Wilson",
    centro: "Center A",
    fechaNacimiento: "1987/06/06",
    fechaMembresia: "2023/09/14",
    status: "Desactivado",
  },
  {
    memberID: "009",
    cardID: "36912",
    nombreApellido: "Olivia Martinez",
    centro: "Center D",
    fechaNacimiento: "1994/10/10",
    fechaMembresia: "2023/10/21",
    status: "Activo",
  },
  {
    memberID: "010",
    cardID: "48263",
    nombreApellido: "William Taylor",
    centro: "Center B",
    fechaNacimiento: "1989/12/02",
    fechaMembresia: "2023/11/05",
    status: "Activo",
  },
  {
    memberID: "011",
    cardID: "90909",
    nombreApellido: "Grace Johnson",
    centro: "Center A",
    fechaNacimiento: "1996/05/19",
    fechaMembresia: "2023/12/12",
    status: "Desactivado",
  },
];

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
              <span id="head">Member ID</span>
            </li>
            <li>
              <span id="head">Card ID</span>
            </li>
            <li>
              <span id="head">Nombre y apellido</span>
            </li>
            <li>
              <span id="head">Centro</span>
            </li>
            <li>
              <span id="head">Fecha de nacimiento</span>
            </li>
            <li>
              <span id="head">Fecha de membresia</span>
            </li>
            <li>
              <span id="head">Status</span>
            </li>
            <li>
              <span id="head">Acciones</span>
            </li>
          </ul>

          <div id="lista" className="miembros__table lista">
            {miembros.map((member) => (
              <ul key={member.memberID}>
                <li>
                  <span>{member.memberID}</span>
                </li>
                <li>
                  <span>{member.cardID}</span>
                </li>
                <li>
                  <span>{member.nombreApellido}</span>
                </li>
                <li>
                  <span>{member.centro}</span>
                </li>
                <li>
                  <span>{member.fechaNacimiento}</span>
                </li>
                <li>
                  <span>{member.fechaMembresia}</span>
                </li>

                <li>
                  <span
                    className={
                      member.status === "Activo"
                        ? "status-activo"
                        : "status-desactivado"
                    }
                  >
                    <span
                      className={
                        member.status === "Activo"
                          ? "status-circle status-circle-green"
                          : "status-circle status-circle-red"
                      }
                    ></span>
                    {member.status}
                  </span>
                </li>
                <li>
                  <img src={ACCIONES} alt="ACCIONES" />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Miembros;
