var card = { card: `1` };
delete card.card;
console.log(card);
// console.log(a)
card.value = 'spade';
console.log(card.value);
a = card;
delete a.value;
console.log(card.value);