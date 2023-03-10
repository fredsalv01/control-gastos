import React from "react";

const ControlPresupuesto = ({ presupuesto }) => {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
