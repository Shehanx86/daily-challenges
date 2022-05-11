const array1= [1, 2, 2, 1,4,5];
const array2 = [2,2,5];

// task 1
function intersection (array1, array2) {
    const commonElements = [];
    /*for (let i = 0; i < array1.length; i++ ) {
        const current = array1[i];
        array2.includes(current) && !commonElements.includes(current) && commonElements.push(current);
    }*/


    for(let i = 0; i < array1.length; i++) if(array1.indexOf(array2[i]) !== -1) commonElements.push(array1[i]);
    return commonElements;
}

// task 2
//ToDo: Now you can, Do the task2 based on Task1
Array.prototype.intersection = function(array) {
    const commonElements = [];
    for (let i = 0; i < this.length; i++ ) {
        const current = array[i];
        this.includes(current) && !commonElements.includes(current) && commonElements.push(current);
    }
    return commonElements;
}

const task1 = intersection(array1, array2);
const task2 = array1.intersection(array2);

console.log(task1);
console.log(task2);
