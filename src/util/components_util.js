export const randomColor = () => {
  let randNum = () => Math.ceil(Math.random() * 255);
  if (randNum < 100) randNum += 100;
  return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
};