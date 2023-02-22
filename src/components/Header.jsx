import React from "react";
import NewBudget from "./NewBudget";
const Header = ({
  presupuesto,
  setPresupuesto,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidBudget ? (
         <p>control form</p>
      ) : (
        <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
