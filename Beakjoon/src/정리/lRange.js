const L = {};

L.range = function *(l){
  let i= -1;
  let res = [];
  while(++i < l) {
    yield i
  }
}

function test (name, time, f) {
  console.time(time);
  while(time--) f();
  console.timeEnd(name);
}

const list = L.range(5);

L.map = function *(f, iter) {
  for(const a of iter) {
    yield f(a);
  }


}
console.log(list.next());
console.log(list.next());
console.log(list.next());
console.log(list.next());

// test('range', 10,  () => reduce(add, range(10000)));
// test('range', 10,  () => reduce(add, L.range(10000)));

// const take = (limit, iter) => {
//   let res = [];
//   for (const a of iter) {
//     res.push(a);
//     if(res.length === limit) return res;
//   }
//   return res;
// }