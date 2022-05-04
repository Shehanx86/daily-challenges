const array = [1,1,1,2,4,5,1,5,6];

Array.prototype.removeDuplicates = function() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

console.log(array.removeDuplicates());

