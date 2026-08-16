export const getPrevIndex = (current, length) => {
  return (current - 1 + length) % length; 
}