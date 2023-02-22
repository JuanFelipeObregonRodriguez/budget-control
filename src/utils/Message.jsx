import React from 'react'

const HelpMessage = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default HelpMessage