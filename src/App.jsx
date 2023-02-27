/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import Modal from './components/Modal';
import { generateId } from './utils/generateId';
import BillList from './components/BillList';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [editarGastos, setEditarGastos] = useState({});

  const handleClickModal = () => {
    setModal(true);
    setEditarGastos({});
    setTimeout(() => {
      setAnimar(true);
    }, 300);
  };
  useEffect(() => {
    if (Object.keys(editarGastos).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimar(true);
      }, 300);
    }
  }, [editarGastos]);

  const saveBills = (gasto) => {
    if (gasto.id) {
      const editar = gastos.map((gastoState) => (gastoState.id === gasto.id ? gasto : gastoState));
      setGastos(editar);
    } else {
      gasto.id = generateId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimar(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <div>
      <Header
        className={modal ? 'fijar' : ''}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <BillList gastos={gastos} setEditarGastos={setEditarGastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              type="image"
              alt="nuevo-gasto"
              src={IconoNuevoGasto}
              onClick={handleClickModal}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animar={animar}
          setAnimar={setAnimar}
          saveBills={saveBills}
          editarGastos={editarGastos}
        />
      )}
    </div>
  );
};

export default App;
