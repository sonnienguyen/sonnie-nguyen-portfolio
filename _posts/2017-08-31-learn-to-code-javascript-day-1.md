---
title: 'Learn to code in JavaScript: Day 1'
layout: post
permalink: /learn-to-code-javascript-day-1/
categories: JavaScript
---



<!-- more -->

## What are you doing now?

{% highlight plain %}
TODO:

Read a book
[x] Clean Code: A Handbook of Agile Software Craftsmanship

Watch a video
[x] Javascript Understanding the Weird Parts: #10 The Execution Context (Creation and Hoisting)
{% endhighlight %}

{% highlight plain %}
Pomodoro:

Start timer
[x] Deep work (50 mins)
[x] Time for a break (15 mins)
[x] Deep work (50 mins)
[x] Time for a break (15 mins)
[x] Deep work (50 mins)
[x] Time for a break (15 mins)
[ ] Deep work (50 mins)
[ ] Time for a break (15 mins)
{% endhighlight %}

## What did you learn today?

### Hoisting in JavaScript

{% highlight javascript %}
<!DOCTYPE html>
<head>
  <title>Javascript Understanding the Weird Parts</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
{% endhighlight %}

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

This is called `hoisting`. The way it is explained, I think can give you the wrong impression. If you look online how `hoisting`  is explained, that people are saying variables and functions in JavaScript are hoisted or move to the top by JavaScript engine. 

> What executing is not what you have written, it's been translated by the JavaScript engine.

As if they were moved physically up to the top so that they work no matter where you put your code. It's not like JavaScript engine is physically moving the code you typed around and then execute it.

To understand what Javascript is doing we just need to dig a little bit deeper into execution context and how it is created.

### It is better to always do this in JavaScript

Is it a bad idea to rely on hoisting in any ways. You can run into trouble if the value is `undefined` and not the value you are expecting. This kind of work but it is better to always do this so that you don't get caught up in that trap.

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

{% highlight plain %}
Sonnie Nguyen: okay, got it!
{% endhighlight %}