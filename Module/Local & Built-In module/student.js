/*
///////
       Local Module
///////
*/
const getName = () =>{
    return 'Noyon Sarker';
}

const getAge = () =>{
    return 23;
}
const cgpa = 3.70;

//////////////////////// Export every element 'one by one': 01

exports.Name = getName;
exports.Age = getAge;
exports.gpa = cgpa;

/////////////////////// Export every element 'using package': 02
/*
module.exports = {
    getName,
    getAge,
    cgpa
}
*/

// We can export a element when its define
exports.txt = () =>{
    return 'This is a sample text.';
}




