/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import formatDate from '../utils/formatDate';

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const iconos = {
  Ahorro: IconoAhorro,
  Comida: IconoComida,
  Casa: IconoCasa,
  Gastos: IconoGastos,
  Ocio: IconoOcio,
  Suscripciones: IconoSuscripciones,
  Salud: IconoSalud,

};
const Gasto = ({ gasto }) => {
  const {
    nombre, cantidad, categoria, fecha, id,
  } = gasto;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={iconos[categoria]} alt="Icono Nuevo" />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
            agregado el:
            {' '}
            <span>{formatDate(fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">
        $
        {cantidad}
      </p>
    </div>
  );
};

export default Gasto;
