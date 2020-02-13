// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._hunger = 100;
//     this._thirst = 100;
//   }
//   get name() {
//     return this._name;
//   }
//   get hunger() {
//     return this._hunger;
//   }
//   get thirst() {
//     return this._thirst;
//   }
//   eat() {
//     this._hunger--;
//   }
//   drink() {
//     this.thirst--;
//   }
// }

// class Bunny extends Animal {
//   constructor(name, lovesCarrot, favFood) {
//     super(name);
//     this._lovesCarrot = lovesCarrot;
//     this._favFood = favFood;
//   }
//   get lovesCarrots() {
//     return this._lovesCarrot;
//   }
//   get favFood() {
//     return this._favFood;
//   }
// }
// const rosie = new Bunny("Rosie", true, ["basil", "rockets", "broccoli"]);

// conversion from class/subclass to function prototypes

let Animal = function(name) {
    this.name = name;
    this.hunger = 100;
    this.thirst = 100;
}

Animal.prototype.eat = function() {
    return this.hunger--;
}

Animal.prototype.drink = function() {
    return this.thirst--;
}

let Bunny = function(name, lovesCarrots, favFood) {
    Animal.call(this, name);
    this.lovesCarrots = lovesCarrots;
    this.favFood = favFood;
};

Bunny.prototype=Object.create(Animal.prototype);

let murphy = new Bunny('murphy', true, ['basil', 'rockets', 'broccoli'])
console.log(murphy)
