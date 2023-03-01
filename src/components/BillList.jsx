/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Gasto from './Gasto';

const BillList = ({
  gastos,
  setEditarGastos,
  deleteBills,
  filter,
  gastosFiltrados,
}) => (
  <div className="listado-gastos contenedor">
    {filter ? (
      <div key="gastos-filtrados">
        <h2>
          {gastosFiltrados.length
            ? 'Gastos'
            : 'no hay gastos aun en esta categoría'}
        </h2>
        {gastosFiltrados.map((gasto) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setEditarGastos={setEditarGastos}
            deleteBills={deleteBills}
          />
        ))}
      </div>
    ) : (
      <div key="gastos">
        <h2>{gastos.length ? 'Gastos' : 'no hay gastos aun'}</h2>
        {gastos.map((gasto) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setEditarGastos={setEditarGastos}
            deleteBills={deleteBills}
          />
        ))}
      </div>
    )}
  </div>
);

export default BillList;
