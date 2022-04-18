const reverseString = (str) => {
    let reversed = '';
    for (let i = 0; i <= str.length; i++ ) {
        reversed = reversed + str.charAt(str.length - i);
    }
    return reversed;
}

const myName = 'shehan';
console.log(reverseString(myName));