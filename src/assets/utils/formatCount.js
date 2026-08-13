export const formatCount = (count) => {
  if (count < 1000) {
    return count.toString();
  }

  if (count < 1000000) {
    const value = count / 1000;
    return `${Number(value.toFixed(1))}k`
  }

  if (count < 1000000) {
    const value = count / 1000;
    return `${Number(value.toFixed(1))}k`
  }

  if (count < 100000000) {
    const value = count / 1000000;
    return `${Number(value.toFixed(1))}m`
  }

  const value = count / 100000000;
  return `${Number(value.toFixed(1))}b`
};
