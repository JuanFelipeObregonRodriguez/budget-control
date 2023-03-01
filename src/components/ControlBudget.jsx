/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import formatMoney from '../utils/formatMoney';
import 'react-circular-progressbar/dist/styles.css';

const ControlBudget = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

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
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    setPorcentaje(nuevoPorcentaje);
    setDisponible(totalDisponible);
    setGastado(formattedTotalBudget);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '3B82F6',
          })}
          text={`${porcentaje}% gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>presupuesto:</span>
          {' '}
          {formatMoney(presupuesto)}
        </p>
        <p className={`${disponible > 0 ? 'negativo' : ''}`}>
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
