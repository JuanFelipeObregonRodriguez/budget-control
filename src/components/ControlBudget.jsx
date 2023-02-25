/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import formatMoney from '../utils/formatMoney';

const ControlBudget = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      const cantidad = parseFloat(gasto.cantidad); // convertir a número
      return total + cantidad;
    }, 0);
    const formattedTotalBudget = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(totalGastado);
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    setGastado(formattedTotalBudget);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>presupuesto:</span>
          {' '}
          {formatMoney(presupuesto)}
        </p>
        <p>
          <span>disponible:</span>
          {' '}
          {formatMoney(disponible)}
        </p>
        <p>
          <span>gastado:</span>
          {' '}
          {formatMoney(gastado)}
        </p>
      </div>
    </div>
  );
};
export default ControlBudget;
