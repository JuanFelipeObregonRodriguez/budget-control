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
import Filters from './components/Filters';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0,
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);
  const [gastos, setGastos] = useState([
    ...localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [],
  ]);
  const [editarGastos, setEditarGastos] = useState({});
  const [filter, setFilter] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(editarGastos).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimar(true);
      }, 300);
    }
  }, [editarGastos]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    if (filter) {
      const filterBills = gastos.map((filterBill) => filterBill.categoria === filter);
      setGastosFiltrados(filterBills);
    }
  }, [filter]);

  const handleClickModal = () => {
    setModal(true);
    setEditarGastos({});
    setTimeout(() => {
      setAnimar(true);
    }, 300);
  };

  const saveBills = (gasto) => {
    if (gasto.id) {
      const editar = gastos.map((gastoState) => (gastoState.id === gasto.id ? gasto : gastoState));
      setGastos(editar);
      setEditarGastos({});
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
  const deleteBills = (id) => {
    const deleteBill = gastos.filter((findGasto) => findGasto.id !== id);
    setGastos(deleteBill);
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
            <Filters filter={filter} setFilter={setFilter} />
            <BillList
              filter={filter}
              gastosFiltrados={gastosFiltrados}
              gastos={gastos}
              setEditarGastos={setEditarGastos}
              deleteBills={deleteBills}
            />
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
          setEditarGastos={setEditarGastos}
        />
      )}
    </div>
  );
};

export default App;
