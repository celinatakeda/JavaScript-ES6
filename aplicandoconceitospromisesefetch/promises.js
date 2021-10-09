// Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function(){
        // did something
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Oops')
    setTimeout(function() {
        // did something
        resolve('Second data')
    }, 1000);
});

// Executado em paralelo, em vez de sequencial
//Promise.all([doSomethingPromise(), doOtherThingPromise()]).then//(data => { console.log(data);
//});

//Promise.all([doSomethingPromise(), doOtherThingPromise()]).then//(data => { console.log(data[0].split(''));
//     console.log(data[1].split(''));
//}).catch(err => {
//    console.log(err)
//});

// Promise que for resolvido primeiro
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => { console.log(data);
});


//console.log(doSomethingPromise); // fica no estado pendente

//doSomethingPromise()
//.then(data => {
//    console.log(data.split('')); 
//    return doOtherThingPromise();
//})
//.then(data2 => console.log(data2.split('')))
//.catch(error => console.log('Ops', error));



