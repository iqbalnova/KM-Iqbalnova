console.log('Promise')

// Pending
let sudahDatang;
let kondisi = 'abs';

const doATask = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('ini yang atas');
        // console.log(sudahDatang)
    }, 6000);
});

const doATask1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (kondisi === 'hadir'){
            resolve('Janji terpenuhi');
        } else {
            reject('janji dibatalkan');
        }
        // console.log(sudahDatang)
    }, 2000);
});



// callback statement
// doATask.then((res) => {
//     console.log(res);
// });

// doATask1.then((res) => {

// }).catch((err) => {
//     console.log(err)
// })



// Asyncronus process
const doAPromise = async () => {
    try {
        const result1 = await doATask;
        console.log(result1)
        const result = await doATask1;
        console.log(result)
    } catch (error){
        console.log(error)
    }
}
doAPromise();




// fullfilled / resolved

// rejected