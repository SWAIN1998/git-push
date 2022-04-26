//function definition 
function sum(a, b) {
    return a + b;
  }
  
  // call() method calls the function sum()
  var result = sum.call(this, 5, 10);
  
  console.log(result);