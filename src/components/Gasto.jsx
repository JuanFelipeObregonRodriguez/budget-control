/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import formatDate from '../utils/formatDate';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

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

const Gasto = ({ gasto, setEditarGastos }) => {
  const {
    nombre, cantidad, categoria, fecha, id,
  } = gasto;
  return (
    <SwipeableList>
      <SwipeableListItem
        swipeLeft={{
          content: <h1 className="eliminar ">eliminar</h1>,
          action: () => console.info('swipe action triggered'),
        }}
        swipeRight={{
          content: <h1 className="editar">editar</h1>,
          action: () => setEditarGastos(gasto),
        }}
        onSwipeProgress={(progress) => console.info(`Swipe progress: ${progress}%`)}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
