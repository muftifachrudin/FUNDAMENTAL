// Generate Range (looping only)
// ex min 2 max 10, step : 3
// 2, 5,

function generateRange(min, max, step) {
  let result = [];
  for (let i = min; i < max; i += step) {
    result.push(i);
  }
  return result;
}

console.log(generateRange(1, 10, 4));
