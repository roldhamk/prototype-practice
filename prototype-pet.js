// class Bunny {
//     constructor(name) {
//       this._name = name;
//       this._hops = 0;
//     }
//     get name() {
//       return this._name;
//     }
//     get hops() {
//       return this._hops;
//     }
//     increaseHops() {
//       this._hops++;
//     }
//   }
  
//   const rosie = new Bunny("Rosie");
//   const lizzie = new Bunny("Lizzie");
  
let Bunny = function(name) {
    this.name = name;
    this.hops = 0;
} 

Bunny.prototype.increaseHops = function() {
    this.hops++
    return `${this.name} hopped! Hop count: ${this.hops}.`
}

let rosie = new Bunny('Rosie');
console.log(rosie);
console.log(rosie.increaseHops());
