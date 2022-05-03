//Recursive approach
const reverseString = (str, output = '') => {
    //exit condition for recursion
    if(str.length === 0) return output;
    // Validating to be a string
    if (typeof str !== "string") throw new Error("Input must be string");

    //Recursive approach
    const lastEle = str[str.length - 1];

    output = output + lastEle;
    return reverseString(str.slice(0,-1), output);
};



/**const reverseString = (str) => {
    let reversed = '';
    for (let i = 0; i <= str.length; i++ ) {
        reversed = reversed + str.charAt(str.length - i);
    }
    return reversed;
}
*/

const myName = 'shehan';
console.log(reverseString(myName));
