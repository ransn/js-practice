/**
 * Syntax
  const obj = {
      key:value
  }
 */
const dynamicProperty = "answer";
const inverseOfPI = 1 / Math.PI;

const obj = {
  p1: 10,
  p2: "Text",
  f1() {},
  f2: () => {},
  // Below one is a dynamic property
  [dynamicProperty]: 42,
  inverseOfPI: inverseOfPI
  //OR
  //inverseOfPI
};

// undefined
console.log(obj.dynamicProperty);
console.log(obj.answer);
