---
title: 'JavaScript: Day 4'
layout: post
permalink: /javascript-day-4/
categories: JavaScript
---

JavaScript function parameters and variable scope

<!-- more -->

## What are you doing now?

{% highlight plain %}
TODO:

Research:
[x] JavaScript function parameters and variable scope

Read a book:
[ ] You Don't Know JS: Up & Going 
  [x] Into Programming (functions)

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

### JavaScript Variable Scope

Local variables have priority over global variables in functions.

{% highlight javascript %}

// app.js

// These two variables are in the global scope
var message = 'Hello';
var name = 'World';

function bar() {
  // Local variables have local scope: They can only be accessed within the function.
  var message = 'Hello';
  var name = 'Sonnie';
  // Output to console
  console.log(message, name);
}

bar();
{% endhighlight %}

{% highlight plain%}

output from console:

Hello Sonnie

{% endhighlight %}

### JavaScript Function Parameters

Functions can optionally take arguments (aka parameters)—values you pass in. And they can also optionally return a value back.

{% highlight javascript %}

// app.js

// Declare the function 'myFunction'
function foo(message, name) {
  // Output to console
  console.log(message, name);
}

// Pass object reference to the function
foo('Hello', 'World');
foo('Hello', 'Sonnie');
{% endhighlight %}

{% highlight plain%}
output from console:

Hello World
Hello Sonnie
{% endhighlight %}
