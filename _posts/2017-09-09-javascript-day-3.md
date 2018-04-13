---
title: 'JavaScript: Day 3'
layout: post
permalink: /javascript-day-3/
categories: JavaScript
---

```

TODO:

Shopping list web app (project)
[ ] Complete shopping list web app
[x] Create a "checked" when clicked on an item

```

<!-- more -->

## Identify the core features

Today I learned to break down this project into tiny chunks. We won't pay much attention to how the application looks for the time being. Identify the core features we will need to build our shopping list app.

+ Add items
+ Delete items
+ Mark items as "checked"

As an example, one of the features I've added is the ability to click on an item and mark as "checked".

## Mark items as checked

``` html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="main.css" media="all">
  <title>Document</title>
</head>
<body>
  <div class="shopping-list">
    <div>
      <h2>Shopping list</h2>
    </div>
    <ul>
      <li>Eggs</li>
      <li>Banana</li>
      <li>Avocado</li>
    </ul>
  </div>
  <script type="text/javascript" src="app.js">
  </script>
</body>

```

``` css

/* main.css */

.shopping-list ul li {
  cursor: pointer;
  list-style: none;
}

.checked {
  text-decoration: line-through;
}

```

``` javascript

// app.js

// Function to add a checked when clicked on
function checkedItemFromList(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    // Output to console
    console.log(event.target.textContent, 'click detected!');
  }
}

// Add event listener to ul
function checkedItem() {
  var list = document.querySelector('ul');
  list.addEventListener('click', checkedItemFromList, false);
}

checkedItem();

```

## References

<a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">Why use addEventListener?</a>
