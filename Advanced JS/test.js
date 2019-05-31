
function foo() {
    this.baz = 'baz'; 
    console.log(this.name);
}

obj = {
    name: 'Aryan',
}

var name = 'Deora';

foo.call(obj);
foo();

console.log(obj);
