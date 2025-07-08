// promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.

const promise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    setTimeout(() => {
        console.log("Promise is resolved");
        resolve("Promise resolved p1!");
    }, 3000);
    });

    // console.log(promise);
    // promise
    // .then((res) =>console.log(res))
    // .then(() =>setTimeout(()=>{
    //     console.log("p1");
    // },2000))
    // .then(() =>setTimeout(()=>{
    //     console.log("p2");
    // },5000))
    // .then(() =>setTimeout(()=>{
    //     console.log("p3");
    // },1000))
    // .catch((err) => console.log(err));

    

// promise
//     .then((res) => {
//         console.log(res);
//         return new Promise(resolve => setTimeout(() => {
//             console.log("p1");
//             resolve();
//         }, 2000));
//     })
//     .then(() => {
//         return new Promise(resolve => setTimeout(() => {
//             console.log("p2");
//             resolve();
//         }, 5000));
//     })
//     .then(() => {
//         return new Promise(resolve => setTimeout(() => {
//             console.log("p3");
//             resolve();
//         }, 1000));
//     })
//     .catch((err) => console.log(err));

function smthing(msg,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("promise resolved",msg);
            reject("promise resolved ",msg);
        },delay);
    });
}

promise
.then((res) => {
    return smthing("p2", 2000);
})
.catch((err) => console.log(err))
.then(() => {
    return smthing("p3", 5000);
})
.catch((err) => console.log(err))
.then(() => {
    return smthing("p4", 1000);
})
.catch((err) => console.log(err));

// try putting .catch before p3

