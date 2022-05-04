//HINT: You can do this using multi pointer approach and using RegEx 


//String check for aplabetics
String.prototype.checkIfString = function() {
    const ascii = this.charCodeAt();
    return ascii <= 90 && ascii >= 65 ? true : false;
}


const reverseOnlyAlpa = (str) => {
    //convsert string to an array
    const array = [];
    for (var i = 0; i < str.length; i++) {
        array.push(str.charAt(i));
}

    for (var i = 0; i < Math.floor(str.length / 2) ; i++) {

        let first = i;
        let last = str.length - i - 1;
        
        while (!str.charAt(first).checkIfString()) {
            first++;
        }
        while (!str.charAt(last).checkIfString()) {
            last--;
        }

        const newLast = str.charAt(first);
        const newfirst = str.charAt(last);
        array[first] = newfirst;
        array[last] = newLast;


        // console.log(array)
    }
    return array;
}

reverseOnlyAlpa('AB!GC&D')
