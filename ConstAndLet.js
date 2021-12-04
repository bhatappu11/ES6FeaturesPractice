for(let i=0;i<5;i++){
    console.log("Index: ",i);
}

const area = 14;
console.log("Area:",area);

// area=20; error

const arr = ["one","two","three"]
arr.push("four");

console.log("Array:",arr)

console.log(arr[1]);
arr[1]="five";
console.log(arr);

function func() {
    let x=1;
    var y=4;
    const z=5;
    {
        let x=2;
        var y=6;
        const z=8;
        console.log("inside block",x,y,z);
    }

    console.log("outside block",x,y,z);
}

func()