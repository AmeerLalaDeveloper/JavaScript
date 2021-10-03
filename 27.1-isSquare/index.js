function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   }

   Square.prototype.isSquare = function (){

    return this.a === this.b && this.c === this.d && this.d === this.a
   }

   const sq1=new Square(2,2,2,2)
   console.log(sq1.isSquare());