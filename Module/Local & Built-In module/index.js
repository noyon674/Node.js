/*
///////
       Local Module
///////
*/
///////////////// Import every element into a variable from student file
const s1 = require('./student');

// For: -01 
console.log(s1.Name());
console.log(s1.Age());
console.log(s1.gpa);

/*
// For: -02
console.log(s1.getAge());
console.log(s1.getName());
console.lo(s1.cgpa);
*/

////////////////////// We can import specific element like:
const {txt} = require('./student');
console.log(txt());


/*
////////
      Built-in- Module : File-System
///////
*/
const fs = require('fs');

// File create and text overwrite
// 1st perameter takes: file name
// 2nd perameter takes: texts
// 3rd perameter shows: have any error or not
// Every time its overwrite
fs.writeFile('Demo.txt','My name is Noyon.', (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('Done');
    }
});

// 1st perameter takes: file name
// 2nd perameter takes: texts
// 3rd perameter shows: have any error or not
// Every time its add texts which we write into the 2nd perameter.
fs.appendFile('Demo.txt', 'I love you pritim.', (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('Done');
    }
});

//// Read data or txt from file
fs.readFile('Demo.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
});

///// File Rename: Demo --> newDemo
fs.rename('Demo.txt', 'newDemo.txt', (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('Done');
    }
});


//// How to find a file 
fs.exists('newDemo.txt', (result) =>{
    if(result){
        console.log('Found');
    } else{
        console.log('Not found.');
    }
});

//// How to delete a file
fs.writeFile('test.txt', 'Hi', (err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('new file created');
    }
});

fs.unlink('test.txt',(err) =>{
    if(err){
        console.log(err);
    } else{
        console.log('deleted');
    }
});