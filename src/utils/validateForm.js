const validateForm = () => {
  const { nombre, cantidad, categoria } = this.state.values;
  const validations = { name: '', email: '', gender: '' };
  let isValid = true;

  if (!nombre) {
    isValid = false;
  }

  if (!cantidad) {
    isValid = false;
  }

  if (!categoria) {
    isValid = false;
  }

  if (!isValid) {
    this.setState({ validations });
  }

  return isValid;
};

export default validateForm;
