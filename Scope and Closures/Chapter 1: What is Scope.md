# Chapter 1: What is Scope?

The ability to store values and pull values out of variables is what gives a program *state*.

## Compilation Process
1. **Tokenizing/Lexing:** breaking up a string of characters into meaningful chunks, called tokens. For instance, `var a = 2;`. would likely be broken up into the following tokens: `var`, `a`, `=`, `2`, and `;`. 
    
    * **Tokenizer vs Lexers:** 
    A tokenizer breaks a stream of text into tokens, usually by looking for whitespace (tabs, spaces, new lines). Whereas, A lexer is basically a tokenizer, but it usually attaches extra context to the tokens -- this token is a number, that token is a string literal, this other token is an equality operator.
    
2. **Parsing:** taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This tree is called an "AST" (<b>A</b>bstract <b>S</b>yntax <b>T</b>ree).

    The tree for `var a = 2;` might start with a top-level node called `VariableDeclaration`, with a child node called `Identifier` (whose value is `a`), and another child called `AssignmentExpression` which itself has a child called `NumericLiteral` (whose value is `2`).

3. **Code-Generation:** the process of taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, etc.
    