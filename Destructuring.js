//array
function func([first,second]){
    console.log("first: "+first+" second: "+second);
}
function func1([first,,,fourth]){
    console.log("first: "+first+" fourth: "+fourth);
}

var arr = [1,2,6,7,3,4];
let [a,b] = arr;
let [r,s,...t] = arr;
console.log(a,b)
console.log(r,s,t);
func(arr)
func1(arr)

//object
function info({fullName,phone}){
    console.log(fullName,phone)
}

var person = {
    fullName: 'Jacob',
    place: 'TTH',
    phone: '9098767890',
    age: 34
}
info(person)

const {fullName,age} = person
console.log(fullName,age);
