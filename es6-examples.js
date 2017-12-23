
//
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
  ];
  
  
  
  [
    { x: 4, y: 5},
    { x: 10, y: 1},
    { x: 0, y: 40}
    ]
    
    // points.map(pair => {
    //   const x = pair[0];
    //   const y = pair[1];
    //   return [x,y]
    // })
    
    
    
    // points.map( pair => {
    //   return [ x , y ] = pair;
    // })
    
    
    // points.map(([ x, y]) => {
    //   return { x: x, y: y};
    // });
    
    points.map(([ x, y]) => {
      return { x, y};
    });
    


const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

// function isEngineer(profile) {
//   var {title, department} = profile;
//   return title === 'Engineer' && department === 'Engineering';
// }



const isEngineer = ({ title, department }) => title === 'Engineer' && department === 'Engineering';


isEngineer(profile)


//Classes
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

// const classesAsObject = classes.map(([subject, time, teacher]) => {
//     return {subject, time, teacher}
// })


const classesAsObject = classes.map( ([subject,time,teacher]) => ({subject,time,teacher}));

console.log(classesAsObject)


//Section 14: Destructuring
//Coding Exercise 34: Recursion with Destructuring
// function double( [ number, ...rest ] ) {
// return number === undefined ? [] : [number * 2, ...double(rest)];
// }

// const double = ([number, ...rest]) => number ? [number*2, ...double(rest)] : [];

const double = ([ number, ...rest ]) => (rest.length ? [number*2, ...double(rest)] : [number*2]);

double([1,2,3])





// Section 17: Promises
promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  
  
  promise
   .then(() => console.log('finally finished!'))
   .then(() => console.log('I was also ran!!!'))
  .catch(() => console.log('uh oh!'))
  
  
  
  url = "https://jsonplaceholder.typicode.com/posts/";
  
  fetch(url)
  // .then(data => console.log(data))
  .then(response => response.json())
  .catch(error => console.log('BAD', error)); 
  // catch only runs when ajax absolutely fails to be issued but not on status > 300 i.e. 404