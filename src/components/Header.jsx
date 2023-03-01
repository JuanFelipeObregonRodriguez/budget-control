/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import NewBudget from './NewBudget';
import ControlBudget from './ControlBudget';

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidBudget,
  setIsValidBudget,
}) => (
  <header>
    <h1>Planificador de gastos</h1>
    {isValidBudget ? (
      <ControlBudget
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
        setIsValidBudget={setIsValidBudget}
      />
    ) : (
      <NewBudget
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidBudget={setIsValidBudget}
      />
    )}
  </header>

);

export default Header;
