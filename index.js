// Your code here
function mapToNegativize(source) {
  return source.map(i => i * -1);
}

function mapToNoChange(source) {
  return source.map(i => i);
}

function mapToDouble(source) {
  return source.map(i => i * 2);
}

function mapToSquare(source) {
  return source.map(i => i * i);
}

function reduceToTotal(source, init=0) {
  let start = init;
  for (let i = 0; i < source.length; i++) {
    start += source[i];
  }
  return start;
}