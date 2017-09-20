---
title: 'Learn to code in JavaScript: Day 5'
layout: post
permalink: /learn-to-code-javascript-day-5/
categories: JavaScript
---

Coding Challenges: Is The Number Even Or Odd?

<!-- more -->

## What are you doing now?

{% highlight plain %}
TODO:

Edabit Coding Challenges:
[x] Is The Number Even Or Odd?
{% endhighlight %}

{% highlight plain %}
Pomodoro:

Start timer
[x] Deep work (50 mins)
[x] Time for a break (15 mins)
[x] Deep work (50 mins)
[x] Time for a break (15 mins)
[ ] Deep work (50 mins)
[ ] Time for a break (15 mins)
[ ] Deep work (50 mins)
[ ] Time for a break (15 mins)
{% endhighlight %}

## What did you learn today?

Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

**Instructions:**

{% highlight plain %}

Is The Number Even Or Odd?

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

**Solutions:**

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

### References

[Is The Number Even Or Odd?](https://edabit.com/challenge/kuzB5CMXiKDEYKXAP)