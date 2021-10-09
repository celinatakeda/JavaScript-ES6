// ES7 - Async / Await
// quando coloca o async, já transformou em uma promise

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    return data;
};

simpleFunc()
.then (data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});