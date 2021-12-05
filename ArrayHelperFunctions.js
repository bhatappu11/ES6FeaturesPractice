const arr = ['a','e','i','o','u'];

function print(ele){
    console.log("element",ele);
}

function transform(ele){
    return ele.toUpperCase();
}


arr.forEach(print)
const printArray = arr.map(transform);
console.log(printArray)

array = ['d','b','t','z','x','o','m'];

const arr2 = array.sort();
console.log(arr2);

var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Annie', age: 19}, 
    {name: 'Roza', age: 16}
  ]

const res = people.filter(ele => ele.age>=40)
console.log(res)
const res2 = people.find(ele => ele.name=='Roza');
console.log(res2)
const res3 = people.some(ele => ele.age > 10 && ele.age <40)
console.log(res3)