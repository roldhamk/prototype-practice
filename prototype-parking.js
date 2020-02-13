// class Car{
//     constructor(registration){
//         this._registration = registration;
//         this._hoursParked = 0;
//         this._totalCharge = 0.00;
        
//     }
//     get registration() {
//         return this._registration;
//     }
//     get hoursParked() {
//         return this._hoursParked;
//     }
//     get totalCharge() {
//         return this._totalCharge.toFixed(2);
//     }
//     increaseHours() {
//         this._hoursParked++;
//         this._totalCharge += 1.50;
//     }
// }

// class Staff extends Car {
//     constructor(registration, staffNum){
//         super(registration);
//         this._staffNum = staffNum;
//         this._credits = 10;
//         this._totalCred = 10;
//         this._creditsLeft = 10;
//     }
//     get staffNum() {
//         return this._staffNum;
//     }
//     get credits() {
//         return this._credits;
//     }
//     get totalCred() {
//         return this._totalCred;
//     }
//     useCredits() {
//         this._credits -= this._totalCharge;
//         this._creditsLeft -=this._totalCharge;
//         return `You have paid £${this._totalCharge.toFixed(2)}. You have £${this._creditsLeft.toFixed(2)} worth of credits left.`
//         }
//     }

let Car = function (reg) {
    this.reg = reg;
    this.hoursParked = 0; 
    this.totalCharge = 0.00;
}

Car.prototype.increaseHours = function() {
    this.hoursParked++; 
    this.totalCharge += 1.50;
    return `You have been parked for ${this.hoursParked} hour. Your charge is currently £${this.totalCharge.toFixed(2)}.`
}

let Staff = function (reg, staffNum) {
    Car.call(this, reg);
    this.staffNum = staffNum;
    this.credits = 10;
    this.totalCred = 10;
    this.creditsLeft = 10;
}

Staff.prototype=Object.create(Car.prototype);

Staff.prototype.useCredits = function() {
    this.credits -= this.totalCharge;
    this.creditsLeft -=this.totalCharge;
    return `You have paid £${this.totalCharge.toFixed(2)}. You have £${this.creditsLeft.toFixed(2)} worth of credits left.`
}

let a1234 = new Staff("hasd123", "a1234");

console.log(a1234)
console.log(a1234.increaseHours());
console.log(a1234.useCredits());

