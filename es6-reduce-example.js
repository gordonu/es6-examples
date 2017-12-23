//Section 7
//Exercise 16: Hardmode: Custom 'unique' helper
function unique(array) {
  
    return array.reduce((acc, eler) => {
      acc.push(array.find((ele) => {
        return ele === eler
      }))
      return acc
      }, [])
    
    
  }
  
  
  var numbers = [1, 1, 2, 3, 4, 4];
  
  unique(numbers)