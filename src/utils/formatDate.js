const formatDate = (fecha) => {
  const newDate = new Date(fecha);
  const optionsDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return newDate.toLocaleDateString('es-ES', optionsDate);
};

export default formatDate;
