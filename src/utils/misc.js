export const sliceHeadTail = (input, amount) => {
  return `${input.slice(0, amount)} ... ${input.slice(-amount + 1)}`;
};
