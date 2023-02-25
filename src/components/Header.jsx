/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';
import NewBudget from './NewBudget';
import ControlBudget from './ControlBudget';

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidBudget,
  setIsValidBudget,
}) => (
  <header>
    <h1>Planificador de gastos</h1>
    {isValidBudget ? (
      <ControlBudget presupuesto={presupuesto} gastos={gastos} />
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
