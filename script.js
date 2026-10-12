const names = ["naomi","Akorede","Adele", "Ricky", "jessice", "chikodi", "emake" , "tesla", "soluTech"]; 
// const arrow = (data) =>{
//     return data === 'naomi'|| data === 'chikodi'
// }

// const transform = (data) => {
//     return data.startsWith('n')
//  }


// const result = names.filter(transform)
// // console.log('Result:', result)


// const check = (string) => {
//     return string.includes('A')
// }
// console.log(names.filter(check))

// const name = "AKOREDE";
// const firstLetter = name.slice(0,1)
//  const updatedfirstLetter = firstLetter.toLocaleUpperCase()

// const firstLetter = name.slice(0, 1).toUpperCase();
// console.log(firstLetter);
// const remainingLetter = name.slice(1).toLowerCase();
// console.log(remainingLetter); 

// const titleCase = (string) =>{
//     const trimed = string.trim();
//     return `${trimed.slice(0,1).toUpperCase()}${(trimed.slice(1).toLowerCase())}`
// }

// console.log(titleCase('dennis')) 

// const result = names.map(titleCase);
// console.log("Result: ", result);




// Promise 
// let run = true;

// const promise = new Promise((resolve, reject) => {
//  setTimeout(() =>{
//     if (run === true){
//         resolve(result)
//     }else{
//         reject('Could not perform operator')
//     }
//  },2000);
// })

// promise.then((data)=> console.log(data)).catch((err) => console.log(err)).finally(() =>console.log('promise Ran Successfully'))

const fs = require('fs');

const writeToFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject('Fail to write file');
            } else {
                resolve(`File writing successfully: ${path}`);
            }
        });
    });
};

fs.writeFile('./text.txt', `${names}`, (err) => {
    if (err) {
        console.log('Error writing File');
    } else {
        console.log('File writing successfully');
    }
});

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject('Fail to read file');
                } else {
                    resolve(data);
                }
            });
        }, 3000);
    });
};

readFile('./text.txt')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

const runCode = async () => {
    try {
        const data = await readFile('./text.txt');
        console.log(data);
        const message = await writeToFile('./jessica.txt', data);
        console.log(message);
    } catch (err) {
        console.log(err);
    }
};

runCode();