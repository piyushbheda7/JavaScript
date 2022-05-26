console.log("Asynchronous Programming")


// Synchronous Programming  line 9 will execute after for loop ended
// for (let index = 0; index < 4004; index++) {
//     console.log(index);
// }

// console.log('Priniting is Done');



// Asynchronous Programming  first line 21 will execute after then for loop start executing

setTimeout(() => {
    for (let index = 0; index < 4004; index++) {
        console.log(index);
    }
}, 100); // when all the operation done after that it should execute

console.log('Priniting is Done');



// 3 Methods For do Asynchronous programming
// 1. Async/await
// 2. Callbacks
// 3. Promises