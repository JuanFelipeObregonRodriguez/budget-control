/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Gasto from './Gasto';

const BillList = ({ gastos }) => (
  <div className="listado-gastos contenedor">
    <h2>{gastos.length ? 'Gastos' : 'no hay gastos aun'}</h2>

    {gastos.map((gasto) => (
      <Gasto gasto={gasto} key={gasto.id} />
    ))}
  </div>
);

export default BillList;
