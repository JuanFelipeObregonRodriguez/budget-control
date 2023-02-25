const formatDate = (fecha) => {
  const newDate = new Date(fecha);
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  return newDate.toLocaleDateString('es-ES', optionsDate);
};

export default formatDate;
