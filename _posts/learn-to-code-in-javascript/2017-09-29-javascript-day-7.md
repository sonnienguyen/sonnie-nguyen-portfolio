---
title: 'JavaScript: Day 7'
layout: post
permalink: /javascript-day-7/
categories: JavaScript
---

{% highlight plain %}

TODO:

Read a book:
[ ] Clean Code: A Handbook of Agile Software Craftsmanship
[x] Chapter 2: Meaningful Names

Shopping list web app (project)
[x] Creating good names

{% endhighlight %}

<!-- more -->

## Meaningful Names

Today I learned choosing good names takes time. To take care with your names, and change them when you find better ones.

> “The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.” - Clean Code

This is the list of `function` names I came up with to build our shopping list app. Is the names we have chosen for our functions pronounceable?

## Use pronounceable names

{% highlight javascript %}

// app.js

function closeButton() {
  // do something
}

function removeItemFromChecklist() {
  // do something
}

function markItemFromChecklist() {
  // do something
}

function saveItemToChecklist() {
  // do something
}

closeButton();
removeItemFromChecklist();
markItemFromChecklist();
saveItemToChecklist();

{% endhighlight %}
