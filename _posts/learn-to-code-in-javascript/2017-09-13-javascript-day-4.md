---
title: 'JavaScript: Day 4'
layout: post
permalink: /javascript-day-4/
categories: JavaScript
---

``` text

TODO:

Research
[x] JavaScript function parameters and variable scope

Read a book
[ ] You Don't Know JS: Up & Going
[x] Into Programming (functions)

```

<!-- more -->

Today I learned functions can optionally take arguments (aka parameters)—values you pass in. And they can also optionally return a value back. Local variables have priority over global variables in functions.

## JavaScript Function Parameters
Pass object reference to the function.

``` javascript

function foo(message, name) {
  console.log(message, name);
}

foo('Hello', 'World');     // Hello World
foo('Hello', 'Sonnie');    // Hello Sonnie

```

## JavaScript Variable Scope

Local variables have local scope, and can't be accessed outside of the block.

``` javascript

// These two variables are in the global scope
var message = 'Hello';
var name = 'World';

function bar() {
  var message = 'Hello';
  var name = 'Sonnie';

  console.log(message, name);    // Hello Sonnie
}

bar();

```