var asyncFunc =  () => new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

asyncFunc()
  .then(function() {
    console.log('Yay!')
    return asyncFunc()
  })
  .then(function() {
    console.log('Nayyy!')
  })

 function Func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = Math.random();
          result > 0.5 ? resolve(result) : reject('Oppps....')
        }, 1)
    });
}

for (let i=0; i<10; i++) {
	Func()
    	.then(result => console.log('Result is: ' + result))
    	.catch(result => console.log('Error: ' + result))
}