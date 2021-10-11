//making a class - conventional capital first letter
class Class1 {
    constructor() {
        this.var1 = "";
        this.var2 = "";
        this.method = function () {
            return 0;
        }
    };
    //overload
    constructor(x1, x2) {
        this.var1 = x1;
        this.var2 = x2;
        this.method = function () {
            return 0;
        };
    }
}
//constructor
var obj1 = new Class1();
var obj2 = new Class1(x, y);