import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) <= 0) {
      setMensaje("El presupuesto es invalido");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
    setPresupuesto(presupuesto);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="Number"
            className="nuevo-presupuesto"
            placeholder="Agrega tu presupesto"
            // pattern="[0-9]*"
            min={0}
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(Number(e.target.value));
            }}
          />
        </div>
        <input type="submit" value="Agregar" />
        {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
