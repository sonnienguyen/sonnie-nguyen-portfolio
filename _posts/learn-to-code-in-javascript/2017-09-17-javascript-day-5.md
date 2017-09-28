---
title: 'JavaScript: Day 5'
layout: post
permalink: /javascript-day-5/
categories: JavaScript
---

{% highlight plain %}

TODO:

Edabit Coding Challenges
[x] Is the number even or odd?

{% endhighlight %}

<!-- more -->

## Is the number even or odd?

Today I learned to create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

**Instructions:**

{% highlight plain %}

Rules
• Input will always be whole numbers (don't worry about decimals).
• Negative whole numbers are fine.

Examples

3 ➞ "odd"

146 ➞ "even"

19 ➞ "odd"

Notes
• Be sure to return "even" or "odd" in lowercase. Test cases are case sensitive.

{% endhighlight %}

**Code:**

{% highlight javascript %}

function isEvenOrOdd(num) {
  
}

{% endhighlight %}

**Solution:**

{% highlight javascript %}

function isEvenOrOdd(num) {
  console.log(num);
  if (num % 2 === 0) {
    console.log('is even');
    return 'even';
  }
  console.log('is odd');
  return 'odd';
}

{% endhighlight %}

## References

<a href="https://edabit.com/challenge/kuzB5CMXiKDEYKXAP" target="_blank">Is The Number Even Or Odd?</a>