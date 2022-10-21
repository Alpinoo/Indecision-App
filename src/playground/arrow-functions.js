// const getFirstName = (name) => {
//    const a = name.split(' ')[0];
//    return a;
// };

// const getFirst = (name) => name.split(' ')[0];

// console.log(getFirstName('Alp Oral'));
// console.log(getFirst('Alp Oral'));

const multiplier = {
   numbers: [2, 15, 76, 3, 12],
   multiplyBy: 2,
   multiply() {
      return this.numbers.map(
         (num) => num * this.multiplyBy
      );
   },
};

console.log(multiplier.multiply());
