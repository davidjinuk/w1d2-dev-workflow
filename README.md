Week 1 Day 2
=====

## Preamble / Housekeeping (5m)

* About me
* How I/we lecture. Suggestions for you.
* Assumption about prior knowledge.
* Remote questions (thanks to some of you local students for joining the channel to monitor for questions!)

## Themes: Approach and Debugging

* It's all about the approach, not the solution
* Primarily: *Debugging*

## Here is a markdown code example

Before jumping into code, we talked about Markdown and its benefits. How you should use it for note taking (recommendation only) b/c as devs you are expected to know about it and know fundamental (basic) markdown syntax! So might as well get the practice in.

```javascript
console.log('code example');
```

### Live Coding Problem

> Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.


### Also introduced:

Node `debugger` keyword along with `node debug <file> <args>` which will run `<file>` in the node debugger (please read up on this)

Reference: <https://www.google.ca/search?q=node+debug> -> <https://nodejs.org/api/debugger.html>

Commands to become familiar with: :

1. `repl` (and Ctrl + C to step back out of it)
2. `cont` or `c`
3. `next` or `n`
4. `step` or `s`
5. <kbd>Ctrl + C</kbd> or `.exit` to exit


### Key Points (Summary)

* Inner voice and conversation (hypothesis.)
* Expecting outcome before running (predicting)
* Write in small (smallest possible executable program) steps
* Practice proper Indentation... always
* Validate your assumptions in the node console/repl
* `node debug` with `debugger`
  * We used the world REPL (`repl`) but didn't talk about it much. HOMEWORK: research what REPL means and why node uses that word in the `node debug` process.
  * If you're confused about how `repl` works, the best way to initially learn is to read + experiment with it. In the same way that I did up here. If you're still unclear on it, of course by all means, ask a mentor (15m rule! ;)
* Also: don't follow live code.
* MDN/StackOverflow/API docs can help. "Learning to google" is a gradual thing and not as simple as it sounds. It is an art in of itself.
* Use concrete words to describe your problem if you don't know the words to describe it
* Break your solution into functions as you go (input and output!)
* Refactor => better code with same results
* 15 minute rule, use it all the time
* Recommendation: Use markdown starting today, for note taking in class
  * For sublime, you may have to install a markdown syntax highlighter
* Tip: We looked at jquery's README ([formatted](https://github.com/jquery/jquery) vs [raw](https://raw.githubusercontent.com/jquery/jquery/master/README.md))
