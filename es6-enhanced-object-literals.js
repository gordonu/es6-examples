//ENHANCED OBJECT LITERALS
//BEFORE
// function createBookShop(inventory) {
//   return {
//   inventory: inventory,
//   inventoryValue: function() {
//         return this.inventory.reduce((total, book) => total + book.price, 0);
//   },
//   priceForTitle: function(title) {
//         return this.inventory.find(book => book.title === title).price;
//   }
//   };
// }

// const inventory = [
//   { title: 'Harry Potter', price: 10 },
//   { title: 'Eloquent Javascript', price: 15 }
//   ];
  
// const bookShop = createBookShop(inventory);

// bookShop.inventoryValue();
// bookShop.priceForTitle('Harry Potter');



//AFTER
function createBookShop(inventory) {
  return {
   inventory, // reference to key and value with same name you can condense
   inventoryValue() {   // if you have a key value pair you can omit funciton keyword and colon
         return this.inventory.reduce((total, book) => total + book.price, 0);
   },
   priceForTitle: function(title) {
         return this.inventory.find(book => book.title === title).price;
   }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
  ];
  
const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');





 
//BEFORE
function saveFile(url, data) {
  $.ajax({ method: 'POST', url: url, data: data });
}

const url = 'http://fileupload.com';
const data = { color: 'red'};

saveFile(url, data);


//AFTER
function saveFile(url, data) {
  $.ajax({ url, data, method: 'POST'});
}

const url = 'http://fileupload.com';
const data = { color: 'red'};

saveFile(url, data);






//BEFORE
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };


//AFTER
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };




//BEFORE
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };

//AFTER
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };





//BEFORE
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

//AFTER
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}