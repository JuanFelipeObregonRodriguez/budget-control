import React, { useState } from "react";
import Message from "../utils/Message";

const NewBudget = ({ presupuesto, setPresupuesto, setIsValidBudget}) => {
  const [mensaje, setMensaje] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0)  {
     setMensaje('el presupuesto no es valido');
     return;
    }
   setMensaje('');  
   setIsValidBudget(true);
  };



  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlerSubmit}>
        <div className="campo">
          <label htmlFor="presupuestoId">Añadir nuevo presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            id="presupuestoId"
            placeholder="añadir presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="añadir" />
        {mensaje && <Message tipo="error">{mensaje}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
