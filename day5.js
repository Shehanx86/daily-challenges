var bar = "global";

function foo() {
    console.log( this.bar );
}
    
var obj1 = {
    bar: "obj1",
    foo: foo
};
    
var obj2 = {
    bar: "obj2"
};

foo();
//It should print 'global' as far as I know but for some reason it's printing 'undefined'.
//reason for it to print 'global' is, in the foo function we have we are refering 'bar' of 'this' context.
//Also we're executing foo() in the global context. So this function's 'this' should be refering to the context it is being executed.
// And that context is global. And we have bar = 'gobal' defined in global context. So it should print 'global'

obj1.foo();
//In javascript function's 'this' is refering to the context which it is being executed. here foo() is exectued 
// on obj1. So the executing context is inside obj1. And we have bar: "obj1" in it's context. So "obj1" is printed.

foo.call(obj2);
//In here we are telling foo function to execute on obj2 explicitly. So this is somewhat like obj2.foo().
//So in this situation, the above reason applies

new foo();
//In here we're creating a new foo object. and it's constructor executes on global context. Again according to my knowledge 
// it should print 'global', but im getting undefined :(
