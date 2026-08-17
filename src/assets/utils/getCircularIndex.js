export const getCircularIndex = (index, length) => {
  return (index + length) % length;
};