var datas = [10, 29, NaN];
var value = 10;
var sum = 0;
for (var data of datas) {
    if (isNaN(data)) continue;
sum += data;
console.log(sum)
}
// datas.forEach(data => {
//     if (!isNaN(data)) {
//         sum += data;
//     }
//     console.log(sum);
// })
// console.log(sum);
console.log(Math.round(value / sum * 100));
// console.log(NaN == NaN);