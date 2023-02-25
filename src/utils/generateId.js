export const generateId = () => {
  const ramdom = Math.random().toString().substring(2);
  const randomDate = Date.now().toString();
  return ramdom + randomDate;
};
export default generateId;
