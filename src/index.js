module.exports = function solveEquation(equation) {
  // your implementation
  let array = equation.split(' ');
  let a = Number(array[0]);
  let b = (array[3] == '-')? -Number(array[4]): Number(array[4]);
  let c = (array[7] == '-')? -Number(array[8]): Number(array[8]);
  
   

  console.log(
    a, b, c
  );

  let D = b * b - 4 * a * c;
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);

  return [Math.round(x1), Math.round(x2)].sort(function(a, b) {
    return a - b;
  });
}
