/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';

const HelpMessage = ({ children, tipo }) => (
  <div className={`alerta ${tipo}`}>{children}</div>
);

export default HelpMessage;
