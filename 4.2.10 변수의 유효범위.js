function f() {
    a = "local"
    return a;
}
f()
console.log(a)
// 변수를 선언하지 않고 값을 할당하면 자바스크립트는
// 변수를 전역으로 설정함. 하지만 버그의 원인이 될 수
// 있으므로 항상 변수를 선언할 것