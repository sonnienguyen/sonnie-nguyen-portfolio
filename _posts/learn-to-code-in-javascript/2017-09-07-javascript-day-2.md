---
title: 'JavaScript: Day 2'
layout: post
permalink: /javascript-day-2/
categories: JavaScript
---

``` text

TODO:

Watch a video
[x] Javascript Understanding the Weird Parts: #30 Objects and the Dot

```

<!-- more -->

## Objects

Today I learned about objects are a collection of name-value pairs, and those values can be other collections of name-value pairs. An object can have properties and methods.

We can use dot notation operator or we can use bracket notation operator to find properties and methods. The preferred approach is using the dot notation operator. It's very clean, it's very clear and it's also easier to debug and find problems. To start with, always use the dot notation operator.

## Create our first object

``` javascript

// Create a new object, and this is going to sit in memory
var person = new Object();

```

## Bracket notation operator

``` javascript

var person = new Object();

// This is one way to set and access the property 
// Use a string to access this
person["firstname"] = "Sonnie";
person["lastname"] = "Nguyen";

// Set a string
var firstNameProperty = "firstname";

// Access the property by using bracket [] notation operator with a string
console.log(person[firstNameProperty]);

```

``` text

output from console:

Sonnie

```

## Dot notation operator

``` javascript

var person = new Object();

person["firstname"] = "Sonnie";
person["lastname"] = "Nguyen";

var firstNameProperty = "firstname";

// The dot notation operator acted exactly the same as the bracket notation operator
// It is a lot faster to type by using dot operator notation
console.log(person.firstname);

```

``` text

output from console:

Sonnie

```

## References

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank">Javascript Operator Precedence</a>
