// ES6: DESTRUCTURING
var expense = {
  type: 'Business',
  amount: '$45 USD'
}
//ES5
// var type = expense.type;
// var amount = expense.amount;

//ES6
const { type } = expense
const { amount } = expense

console.log(type, amount)




//DESTRUCTURING ARGUMENTS OBJECT
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

// function fileSummary(file) {
//   return `The file ${file.name}.${file.extension} is of size ${file.size}`
// }

function fileSummary({name, extension, size}, { color }) {
    return `${ color } The file ${name}.${extension} is of size ${size}`
}


fileSummary(savedFiled, { color: 'red'});


//DESTRUCTURING ARRAYS
const companies = [
  'Google',
  'Facebook',
  'Uber'
  ];

//ES5
const firstCompany = companies[0]
console.log(firstCompany)
  
//ES6
// const [ name, name2, name3, name4 ] = companies;
// console.log(name, name2, name3, name4)

//With rest operator
const [ name, name2, ...rest] = companies;
console.log(name, rest)

  
  