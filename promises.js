/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

/* In your file, create two similar functions. Each can return a number or 
string. Before the second function, place the async keyword. Use the console 
to log the calls to both functions. */

// Your code here

firstFunction = () => {
    return "Hello There..";
}

async function secondFunction() {
    return "I am the Senate!";
}

// Does the obvious
console.log('First Function: ', firstFunction())

// Priunts the Promise
console.log('Second Function: ', secondFunction())

// Ues the above Promise from Async Function
secondFunction().then(text => console.log(text))


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

/* Next, create another async function. Declare a constant that awaits the call 
to your other async function in phase 1 and logs the value. Make sure you remember 
to call your new function so it will run (since functions are only stored, but not 
run, when defined).  */

// Your code here

async function thirdFunction() {
    const value = await secondFunction();
    console.log('Waiting on: ', value)
}

thirdFunction();


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

/* Now, it's time to create your own, custom Promise so that you can have some 
delay before the promise is resolved. If you'd like to use await again, then you 
will need to wrap your experiment in a function (and call it).  */

// Your code here

async function customPromise() {
    newPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved: Custom promise");
        }, 1000)
})
    const result = await newPromise;
    console.log('The Promise is --> ', result)

}

customPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

/* As an alternative, you could also use then to wait for a promise; even a 
custom one. For example, you can create another new Promise and attach .then() to it. */

// Your code here
const anotherPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('After 1.5 seconds, my other promise is', r));

anotherPromise;


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

/* As you can see, setTimeout does not follow the Promise pattern. However, 
you could create your own wait function to remedy this. In phase 1, you discovered 
that an async function returns a Promise. */

// Your code here

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function useWait(ms) {
    wait(ms).then(() => console.log("And the 5th Promise is now done after 3.5 seconds"))
}

useWait(3500);

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */
/* Start by creating yourself a function that returns a Promise. Give it one 
argument that is a random value, and use that value to determine if the Promise 
is successful (resolve) or unsuccessful (reject). */

// Your code here


const randomPromise = () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        if (randomNum >= 8) {
            resolve(console.log("Accepted: The Number was: " + randomNum))
        }
    }).catch(console.log("Rejected: The Number was: " + randomNum))
}

randomPromise();


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

/* go ahead and create a second version of the functionality above using the await approach. */

// Your code here

async function randomPromise2() {
    await wait(4000);
    let randomNum = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        if (randomNum >= 8) {
            resolve(console.log("randomPromise1 Done. Accepted: The Number was: " + randomNum))
        }
    }).catch(console.log("randomPromise1 Done. Rejected: The Number was: " + randomNum))
};

randomPromise2();





/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM... or is it? :)');