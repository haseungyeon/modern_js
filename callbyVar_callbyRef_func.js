console.log(`callbyVar`);
function add1(x) { return x = x + 1; }
var a = 3;
var b = add1(a);
console.log("a = " + a + " b = " + b);

console.log(`callbyObj`);
function add2(p) { p.x = p.x + 1; p.y = p.y + 1; return p; }
var a = { x: 3, y: 4 };
var b = add2(a);
console.log(a, b);

// 객체 얕은 복사
const person = {
    favorite: { food: 'bread' },
    study: function () { console.log('객체 공부') }
};

const person2 = Object.assign({}, person);

//   (1)원본 객체의 프로퍼티 주소값 변경시 -----------
person.favorite = 'too many';

console.log(person); // {favorite: 'too many', study: ƒ}
console.log(person2); // {favorite: 'bread', study: ƒ}

//   (2) 사본 객체의 프로퍼티 주소값 변경시 -----------

person2.study = function () { console.log('배고프다') };

console.log(person);
// { 
//  favorite: {food: 'bread'}, 
//  study: {console.log('객체 공부')}
// }

console.log(person2);
// { 
//  favorite: {food: 'bread'}, 
//  study: {console.log('배고프다')}
// } 






// 객체 프로퍼티의 프로퍼티를 얕은 복사로 변경 시
const person = {
    favorite: { food: 'bread' },
    study: function () { console.log('객체 공부') }
};

const person2 = Object.assign({}, person);

//   (1)원본 객체의 프로퍼티의 프로퍼티 변경시 -----------
person.favorite.food = 'ice-cream';

console.log(person);
// {favorite: {food: "ice-cream"}, study: ƒ}

console.log(person2);
// {favorite: {food: "ice-cream"}, study: ƒ}

//   (2) 사본 객체의 프로퍼티의 프로퍼티 변경시 -----------
person2.favorite.food = 'pasta';

console.log(person);
// {favorite: {food: "pasta"}, study: ƒ}

console.log(person2);
// {favorite: {food: "pasta"}, study: ƒ}






// 객체 깊은 복사 재귀함수 이용
function copyObject(targetObj) {
    let copiedObj = {};

    if (typeof targetObj === 'object' && targetObj !== null) {
        for (var key in targetObj) {
            copiedObj[key] = copyObject(targetObj[key]);
        }
    } else {
        copiedObj = targetObj;
    }

    return copiedObj;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = copyObject(obj1);

obj2.b.c = 10;

console.log(obj1); // { a: 1, b: {c: 2} }
console.log(obj2); // { a: 1, b: {c: 10} }


//객체 깊은복사 JSON 이용. 메서드나 __proto__ , getter/ setter 등 JSON으로 변경할 수 없는 프로퍼티들은 무시하는 단점 존재
function cloneObj(targetObj) {
    return JSON.parse(JSON.stringify(targetObj));
}

const obj3 = { a: 1, b: { c: 2 } };
const obj4 = cloneObj(obj3);

obj4.b.c = 10;

console.log(obj3); // { a: 1, b: {c: 2} }
console.log(obj4); // { a: 1, b: {c: 10} }

/*** 
 * 출처 : https://velog.io/@colki
 * 
 ***/