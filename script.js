function sumAll(arr) {
  let start = Math.min.apply(null, arr);
  let end = Math.max.apply(null, arr);
  
  let val = start;
  for (let i = start + 1; i <= end; i++){
    val += i;
  }
  return val;
}

sumAll([1, 4]);