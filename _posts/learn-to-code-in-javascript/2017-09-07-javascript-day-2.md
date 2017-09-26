---
title: 'JavaScript: Day 2'
layout: post
permalink: /javascript-day-2/
categories: JavaScript
---

Objects and the Dot

<!-- more -->

## What are you doing now?

{% highlight plain %}
TODO:

Watch a video
[x] Javascript Understanding the Weird Parts: #30 Objects and the Dot
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

### Objects

Objects are a collection of name-value pairs, and those values can be other collections of name-value pairs. An object can have properties and methods.

### Create our first object
{%highlight javascript %}

// Create a new object, and this is going to sit in memory
var person = new Object();

{% endhighlight %}

### Computed Member Access Operator

{% highlight javascript %}

var person = new Object();

// The operator is this brackets [] notation operator
// Inside those brackets, put the name of the value we are trying to locate in memory
person[]

{% endhighlight %}

### Bracket notation operator

{% highlight javascript %}
var person = new Object();                                                                              

// This is one way to set and access the property 
// Use a string to access this
person["firstname"] = "Sonnie";
person["lastname"] = "Nguyen";

// Set a string
var firstNameProperty = "firstname";                                                                    

// Access the property by using bracket [] notation operator with a string            
console.log(person[firstNameProperty]);  
{% endhighlight %}

{% highlight plain %}
output from console:

Sonnie
{% endhighlight %}

### Dot notation operator

{% highlight javascript %}
var person = new Object();

person["firstname"] = "Sonnie";
person["lastname"] = "Nguyen";

var firstNameProperty = "firstname";

// The dot notation operator acted exactly the same as the bracket notation operator
// It is a lot faster to type by using dot operator notation
console.log(person.firstname); 
{% endhighlight %}

{% highlight plain %}
output from console:

Sonnie
{% endhighlight %}

We can use dot notation operator or we can use bracket notation operator to find properties and methods. The preferred approach is using the dot notation operator. It's very clean, it's very clear and it's also easier to debug and find problems. To start with, always use the dot notation operator.

### References

[Javascript Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)