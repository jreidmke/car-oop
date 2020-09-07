//I NEED TO START REVERSING THE ORDER OF HOW I WRITE CONDITIONALS. DON"T BEGIN WITH THE ACTION, END WITH THE ACTION.

//LOOK BELOW FOR EXAMPLE

class Vehicle {
  constructor(make, model, year) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  honk() {
    return "Beep"
  }

  toString() {
  return `The vehicle is a ${this._make} ${this._model} from ${this._year}.`
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this._numWheels = 4;
  }
}

class MotorCycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this._numWheels = 2;
  }

  revEngine() {
    return "VROOM"
  }
}

class Garage {
  constructor(capacity) {
  this._capacity = capacity;
  this._vehicles = [];
  this._occupancy = 0;
  }

  add(newV) {   //<--------------------------RIGHT HERE!!!!!!
    if(newV instanceof Vehicle && this._occupancy < this._capacity) {
      this._vehicles.push(newV);
      this._occupancy++;
    } else if (newV instanceof Vehicle && this._occupancy >= this._capacity) {
    console.log("SORRY, WE'RE FULL");
    } else {
    console.log("ONLY VEHICLES");
    }
  }     //^^^^^^^^^^^INSTEAD OF DOING PUSH FIRST. DO IT LAST. THIS WILL SLIM DOWN THE LOGIC NEEDED!!!!
}

let c = new Car("A", "B", 1992);
let m = new MotorCycle("a", "b", 1992);
let b = new Car("C", "D", 1992);
let g = new Garage(2);
g.add(c)
g.add(m)
g.add(b)