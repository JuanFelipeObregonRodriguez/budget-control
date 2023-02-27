/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import CerrarModal from '../img/cerrar.svg';
import Message from '../utils/Message';

const Modal = ({
  setModal, animar, setAnimar, saveBills, editarGastos,
}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState(false);
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('todos los campos son requeridos');
      return;
    }
    saveBills({
      nombre, cantidad, categoria, id, fecha,
    });
  };
  useEffect(() => {
    console.log(editarGastos);
    if (Object.keys(editarGastos).length > 0) {
      setNombre(editarGastos.nombre);
      setCantidad(editarGastos.cantidad);
      setCategoria(editarGastos.categoria);
      setId(editarGastos.id);
      setFecha(editarGastos.fecha);
    }
  }, [editarGastos]);

  const handleCerrar = () => {
    setAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar-modal" onClick={handleCerrar} />
      </div>
      <form className={`formulario ${animar ? 'animar' : ''}`} onSubmit={handleSubmit}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Message tipo="error">{mensaje}</Message>}

        <div className="campo">
          <label htmlFor="nombre-gasto">
            Nombre del Gasto:
            {' '}
            <input
              type="text"
              id="nombre-gasto"
              placeholder="añade el nombre del gasto"
              value={nombre || ''}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>
        <div className="campo">
          <label htmlFor="cantidad">
            Cantidad:
            {' '}
            <input
              type="number"
              id="cantidad"
              placeholder="añade la cantidad"
              value={cantidad || ''}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </label>
        </div>
        <div className="campo">
          <label htmlFor="option">
            Categoria:
            {' '}
            <select
              id="option"
              value={categoria || ''}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">--seleccione--</option>
              <option value="Ahorro">Ahorro</option>
              <option value="Comida">Comida</option>
              <option value="Casa">Casa</option>
              <option value="Gastos">Gastos Varios</option>
              <option value="Ocio">Ocio</option>
              <option value="Salud">Salud</option>
              <option value="Suscripciones">Suscripciones</option>
            </select>
          </label>
        </div>
        <input type="submit" value="añadir gastos" />
      </form>
    </div>
  );
};

export default Modal;
