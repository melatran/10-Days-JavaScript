class Polygon {
  constructor(sideLengths){
      this.sideLengths = sideLengths
  }
  perimeter(){
     return this.sideLengths.reduce(function add(a,b){
         return a+b;
      })
  }
}

//had to use return this.sidelength in order for it to return the correct values instead of undefined