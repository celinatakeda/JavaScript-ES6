// Symbols

const uniqueId = Symbol('Hello');

//const obj = {
  //  [uniqueId]: 'Hello',
    //_id: 'Hello'
//};

//console.log(obj)

// Well know Symbols

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4]

//const it = arr[Symbol.iterator]()
//console.log(it.next())
//console.log(it.next())
//console.log(it.next())
//console.log(it.next())
//console.log(it.next())

//while (true) {
 //   let { value, done } = it.next()

 //   if (done) {
 //       break;
 //   }
    //console.log(value)
//}

// No ES6  usa for of para percorrer a estrutura de dados
//for (let value of arr) {
    //console.log(value)
//}

const str = 'Digital Innovation One'

//for (let value of str) {
    //console.log(value)
//}

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};
const it = obj[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of obj) {
    console.log(value)
}

// construir um spread

const arr2 = [...obj]
console.log(arr2)