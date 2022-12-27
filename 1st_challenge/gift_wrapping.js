/* For test */
// const gifts = ['cat', 'game', 'socks'];
// const wrapped = wrapping(gifts);
// console.log(wrapped);

function wrapping(gifts) {
  let gifts_wrapped = [];
  for (let x of gifts) {
  	let stars = '*'.repeat(`${x.length+2}`);
    gifts_wrapped.push(stars + "\n"+ "*" + x + "*" + "\n" + stars);
  }
  return gifts_wrapped;
}