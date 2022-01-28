const analyzeArray = (arr) => {
  const average = arr.reduce((total, currentValue) => {
    return total + currentValue / arr.length;
  }, 0);

  const min = arr.sort()[0];

  const max = arr.sort()[arr.length - 1];

  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
