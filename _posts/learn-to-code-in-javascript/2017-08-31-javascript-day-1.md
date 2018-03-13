---
title: 'JavaScript: Day 1'
layout: post
permalink: /javascript-day-1/
categories: JavaScript
---

```

TODO:

Watch a video
[x] Javascript Understanding the Weird Parts: #10 The Execution Context (Creation and Hoisting)

```

<!-- more -->

Today I learned If you look online how hoisting is explained, people are saying variables and functions in JavaScript are hoisted, or move to the top by JavaScript engine. As if they were moved up to the top so that they work no matter where you put your code.

> What executing is not what you have written, it’s been translated by the JavaScript engine. It’s not like JavaScript engine is moving the code you typed around and then execute it.

## In JavaScript, this is called hoisting.

``` javascript

// app.js

// This is hoisting in JavaScript
b();
console.log(a);

var a = 'Hello World!';

function b() {
  console.log('called b!');
}

```

```

output from console:

called b!
undefined

```

## It's a bad idea to rely on hoisting, it's better to always do this in JavaScript

``` javascript

// app.js

var a = 'Hello World!';

function b() {
  console.log('called b!');
}

// It is better to always do this
b();
console.log(a);

```

```

output from console:

called b!
Hello World!

```