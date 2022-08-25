// var sym1 = Symbol();
// var sym2 = Symbol();
// console.log(sym1 == sym2);
// console.log(sym1);

// var Heart = Symbol("하트");
// var HeartFor = Symbol.for("하트");
// console.log(Heart);
// console.log(Heart.toString());
// console.log(HeartFor);

var sym1 = Symbol.for("club");
var sym2 = Symbol("club");
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym2));