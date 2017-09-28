---
title: 'JavaScript: Day 4'
layout: post
permalink: /javascript-day-4/
categories: JavaScript
---

{% highlight plain %}

TODO:

Research
[x] JavaScript function parameters and variable scope

Read a book
[ ] You Don't Know JS: Up & Going 
[x] Into Programming (functions)

{% endhighlight %}

<!-- more -->

Today I learned functions can optionally take arguments (aka parameters)—values you pass in. And they can also optionally return a value back. Local variables have priority over global variables in functions.

## JavaScript Function Parameters

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
## JavaScript Variable Scope

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

