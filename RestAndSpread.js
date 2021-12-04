const arr1 = [1,2,3,4]

const arr2 = [...arr1]
const arr3 = ['a','b','c','d'];

console.log("arr1",arr1,"arr2",arr2,"arr3",arr3);

const arr4 = [...arr1,...arr3];
console.log("arr4",arr4)

function colors(one,two,three,...four){
    console.log('colors are: first->'+one+' second->'+two+' third->'+three+' fourth->'+four)
}

colors("blue","green","pink","red","white","black","yellow");

function add(a,b,c){
    console.log(a+b+c)
}

let numbers = [2,4,6];

add(...numbers);