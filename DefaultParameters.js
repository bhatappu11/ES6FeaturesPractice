function func(a=10,b=20){
    console.log("Sum",a+b);
}

console.log("checking default parameters: ")
func();
console.log("checking pt.2")
func(20)
console.log("checking pt.3")
func(20,30)
console.log("checking pt.4") //wont effect anything
func(a=30,b=40)