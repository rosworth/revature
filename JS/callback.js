function calculateSum(n1, n2, callback) {
  var sum = n1 + n2;
  console.log(`The sum of ${n1} and ${n2} is `);
  callback(sum);
}

function displaySum(x) {
  console.log(x);
}

calculateSum(5, 3, displaySum);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);