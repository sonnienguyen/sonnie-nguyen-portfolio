---
title: 'JavaScript: Day 6'
layout: post
permalink: /javascript-day-6/
categories: JavaScript
---

{% highlight plain %}

TODO:

Research
[x] What is a return statement in JavaScript?

{% endhighlight %}

<!-- more -->

## What is a return statement in JavaScript?

Today I learned  about a `return` value isn't useful unless you do something with it.

> The `return` keyword simply gives the programmer back the value that comes out of the function. So the function runs, and when the return keyword is used, the function will immediately stop running and return the value.

Let's do an experiment on how to use `return` statement and parameters within the body of a function.  

{% highlight javascript %}

// function with one parameter
function square(x) {
  return x * x;
}

console.log(square(5)); // 25

// A function with multiple parameters 
function addNumbers(a, b) {
  var c = a + b;
  return c;
}

console.log(addNumbers(3, 6)); // 9

{% endhighlight %}
