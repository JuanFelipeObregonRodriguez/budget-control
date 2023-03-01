/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';

const Filters = ({ filter, setFilter }) => (
  <div className="filtros sombra contenedor">
    <form>
      <div className="campo">
        <label htmlFor="id">
          Filtrar gastos
          <select
            id="id"
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}
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
    </form>
  </div>
);

export default Filters;
