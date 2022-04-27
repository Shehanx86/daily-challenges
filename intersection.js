const array1= [1, 2, 2, 1,4,5];
const array2 = [2,2,5];

// task 1
function intersection (array1, array2) {
    const commonElements = [];
    for (let i = 0; i < array1.length; i++ ) {
        for (let j = 0; j < array2.length; j++ ) {
            array1[i] === array2[j] && !commonElements.includes(array1[i]) && commonElements.push(array1[i])
        }
    }
    return commonElements;
}

// task 2
Array.prototype.intersection = function(array2) {
    const commonElements = [];
    for (let i = 0; i < this.length; i++ ) {
        for (let j = 0; j < array2.length; j++ ) {
            this[i] === array2[j] && !commonElements.includes(this[i]) && commonElements.push(this[i])
        }
    }
    return commonElements;
}

const task1 = intersection(array1, array2);
const task2 = array1.intersection(array2);

console.log(task1);
console.log(task2);
