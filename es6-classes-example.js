class Car {
  constructor(options) {
    this.title = options.title;
  }
  
  drive() {
    return 'vroom';
  }
  
  
}


class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }
  
  honk() {
    return 'beep';
  }
}





const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota.honk())
console.log(toyota.drive())
console.log(toyota)


const car = new Car({ title: 'Toyota' });
console.log(car)
console.log(car.drive())





class Monster {
  constructor(options) {
    this.health = 100;
  }
}

class Snake extends Monster{
  constructor(options){
    super(options);
    this.name = options.name;
  }

  bite(snakey){
    return snakey.health = snakey.health - 10;
  }
}

const snakey1 = new Snake({ name: 'Snakey1' });
const snakey2 = new Snake({ name: 'Snakey2' });

console.log(snakey1.bite(snakey2));




