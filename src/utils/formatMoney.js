const formatMoney = (money) => money.toLocaleString('es-CO', {
  style: 'currency',
  currency: 'COP',
});

export default formatMoney;
