var i = 42;
function foo() {
   for (var i = 0; i < 10; i++) {
      console.log('Logging:' + i);
   }  
   console.log('Inside Function:' + i);
}
foo();
console.log(i);