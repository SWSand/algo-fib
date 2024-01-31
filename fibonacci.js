function fibonacci(num) {
  let x = 1
  let y = 0
  let z = 0
  
  for(i=0; i<num; i++){
    z = x+y
    x = y
    y = z
  }
  return y
}

module.exports = fibonacci;
