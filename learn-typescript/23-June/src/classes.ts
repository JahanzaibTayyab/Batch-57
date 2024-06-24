class Point {
  //attributes (let,const khbi bi start nai hoty)  (variable (let,const))
  //methods (function ,let ,const keyword nai likhty) (functions (name,arrow))
  x: number;
  private y: number;
  protected z: number;

  // constructor (special method)
  constructor(x: number, y: number, z: number) {
    // values initialization
    this.x = x;
    this.y = y;
    this.z = z;
  }

  //methods

  private print() {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${this.z}`);
  }

  print2() {
    this.print();
  }

  // this (keyword) (this reference(class))
}

// class values (attributes,methods) (object)
// Class object always start with new
// console.log(Point)

const point = new Point(5, 10, 20);
console.log("🚀 ~ point:", point);

console.log(point.x);

point.print2();

//console.log(point.z);

const point1 = new Point(15, 100, 200);
point1.print2();
