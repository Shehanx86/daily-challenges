var a = [1,2,3]
var b = [1,2,3]
var c = "1,2,3"

console.log(a == b)  //flase 
// reason -> 
// 'a' and 'b' are arrays. everything except primitive data types are objects in javascript.
// So basically what we're trying see if object a's reference and object b's reference are equal or not.
// obviosly they are no equal.

console.log(a == c)  //true
// reason ->
// according documentation 
// Loose equality using == -> "Loose equality compares two values for equality after converting both values to a common type. After conversions 
// (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it."
// So 'a' array (actaly an object) is converted to a primitive type which is String and the it compares with 'c'


console.log(b == c) // true
// same above reason


console.log(a === b) // false
//reason ->
//two different object references. So its not equal


console.log(a === c) 
// according to documentation Strict equality using ===
// Strict equality using === -> Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different type ->compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different type
// unlike in the above ==, in here object is not converted implicitly to any primitive type. So answer is false.


console.log(b === c) 
//same above reason
