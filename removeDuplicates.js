const array = [1,1,1,2,4,5,1,5,6];

//TODO: Can you follow this approach, which is O(N)
/*
    const lookup = {};
    for(let item of array) if(!lookup[item]) lookup[item] = 1;
    return Object.keys(lookup);
*/

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

