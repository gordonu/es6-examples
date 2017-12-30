//35. Capturing Arguments with Rest and Spread

function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers([1,2,3,4,5]))



function addNumbers2(a,b,c,d,e) {
  const numbers = [a,b,c,d,e]
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers2(1,2,3,4,5))


function addNumbers3(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  },0)
}

console.log(addNumbers3(1,2,3,4,5))


// 36. The Rest on Rest and Spread
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// defaultColors.concat(userFavoriteColors);

// [...defaultColors, userFavoriteColors]

['green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors]



function validateShoppingList(...items) {
  if(items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');


//37. Look to USe Rest and Spread in This case
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  }, 
  multiply(a, b) {
    return a * b;
  }
};



const MathLibrary2 = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead')
    return this.multiply(...rest);   // <=spread
  }, 
  multiply(a, b) {
    return a * b;
  }
};



//Original Code
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


//Refactored Code
function product(...numbers) {
//   var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}




//Original Code
function join(array1, array2) {
  return array1.concat(array2);
}

//Refactored Code
function join(array1, array2) {
  return [...array1, ...array2]
}




//Original Code
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

//Refactored Code
function unshift(array, ...args) {
  return [...args, ...array]
}