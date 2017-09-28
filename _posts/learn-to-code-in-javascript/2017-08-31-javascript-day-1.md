---
title: 'JavaScript: Day 1'
layout: post
permalink: /javascript-day-1/
categories: JavaScript
---

{% highlight plain %}

TODO:

Watch a video
[x] Javascript Understanding the Weird Parts: #10 The Execution Context (Creation and Hoisting)

{% endhighlight %}

<!-- more -->

Today I learned If you look online how hoisting is explained, people are saying variables and functions in JavaScript are hoisted, or move to the top by JavaScript engine. As if they were moved up to the top so that they work no matter where you put your code.

> What executing is not what you have written, it’s been translated by the JavaScript engine. It’s not like JavaScript engine is moving the code you typed around and then execute it.

## In JavaScript, this is called hoisting.

{% highlight javascript %}

// app.js

// This is hoisting in JavaScript
b();
console.log(a);

var a = 'Hello World!';

function b() {
  console.log('called b!');
}

{% endhighlight %}

{% highlight plain %}
output from console:

called b!
undefined

{% endhighlight %}

## It's a bad idea to rely on hoisting, it's better to always do this in JavaScript

{% highlight javascript %}

// app.js

var a = 'Hello World!';

function b() {
  console.log('called b!');
}

// It is better to always do this
b();
console.log(a);

{% endhighlight %}

{% highlight plain %}
output from console:

called b!
Hello World!

{% endhighlight %}