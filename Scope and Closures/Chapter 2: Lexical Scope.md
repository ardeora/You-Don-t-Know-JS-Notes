# Chapter 2 

## Lexical Scope

Lexical scope is based on where variables and blocks of scope are authored, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.

Consider the following code for example

<img src="img/ch2/fig1.png" style="display: block;" width="500">

**Bubble 1** encompasses the global scope, and has just one identifier in it: `foo`.

**Bubble 2** encompasses the scope of `foo`, which includes the three identifiers: `a`, `bar` and `b`.

**Bubble 3** encompasses the scope of `bar`, and it includes just one identifier: `c`.

The code will begin with `bar` as the innermost function. It will try to search for variable `a` in its scope and when it does not find it, it will move to the scope of function `foo` for the reference of `a`. This process will continue for all operations.

**Scope look-up stops once it finds the first match**. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.

**Note:** Global variables are also automatically properties of the global object (`window` in browsers, etc.), so it *is* possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object.

```js
window.a
```

This technique gives access to a global variable which would otherwise be inaccessible due to it being shadowed. However, non-global shadowed variables cannot be accessed.

## Dynamic Scope

Dynamic scope operates in the way that the scope of the variables is determined by not where they are authored but where they are running from. 

This mechanism is similar to `this` keyword in JavaScript.

### Lexical Scope vs. Dynamic Scope
Consider the following code and see how they produce different output with the same code.

#### Lexical Scope
```js
function foo() {
	console.log( a );
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();

// Terminal Output: 2
```

The console logs `2` to the terminal because when `foo` is called it tries to look up for the variable `a`. When it does not find it in its scope, it moves upward to the parent scope which is the `global` scope in this example. Let's see how this contrasts with Dynamic Scope.

#### Dynamic Scope
```js
function foo() {
	console.log( a );
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();

// Terminal Output: 3
```
The console logs `2` to the terminal because when `foo` is called it tries to look up for the variable `a`. When it does not find it in its scope, it moves upward in its **call-stack** to see who called the function `foo` and checks its scope. Which, in turn, has a variable `a` with a value of `3`.
