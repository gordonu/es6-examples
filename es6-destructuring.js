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
// const companies = [
//   'Google',
//   'Facebook',
//   'Uber'
//   ];

//ES5
// const firstCompany = companies[0]
// console.log(firstCompany)
  
//ES6
// const [ name, name2, name3, name4 ] = companies;
// console.log(name, name2, name3, name4)

//With rest operator
// const [ name, name2, ...rest] = companies;
// console.log(name, rest)


//DESTRUCTURING ARRAYS AND OBJECTS AT THE SAME TIME
const companies = [
  { name: 'Google', loc: 'Mountain View' },
  { name: 'Facebook', loc: 'Menlo Park' },
  { name: 'Uber', loc: 'San Francisco'}
  ]
  
  const [{ loc }] = companies;
  console.log(loc)
  
  
  const Google = {
    locations: ['Mountain View', 'New York', 'London']
  };
  
// const { locations: [ locations ] } = Google
const { locations: [locations] } = Google
console.log('locations', locations)




//WHEN TO USE DESTRUCTURING
function signup({ username, password, email, dateOfBirth, city }) {
  //create new user
  console.log(username, password, email, dateOfBirth, city)
}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

signup(user)




//WHEN TO USE DESTRUCTURING
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
  ];
  
  transform = [
    {x: 4, y: 5},
    {x: 10, y: 1},
    {x: 0, y: 40}
    ];
    
    
points.map(pair => {
    const x = pair[0];
    const y = pair[1];
  });
  
points.map(pair => {
    const [x, y] = pair;
  })


points.map(([x, y]) => {
  return {x: x, y: y};
})

points.map(([x, y]) => {
  return { x, y }
})





//EXERCISE 32

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}



const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var {title, department} = profile;
  return title === 'Engineer' && department === 'Engineering';
}



//EXERCISE 33





