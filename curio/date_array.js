let date = new Date()
let cur_month = new Intl.DateTimeFormat('en-US', {month: "short"}).format(date.setMonth(date.getMonth()))
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month3 = []
for (i = 3; i > 0; i--){
    month3.push(month[date.getMonth()-i]);
}

console.log(month3);