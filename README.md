# Project: Calculator

This application mirrors a basic calculator that performs common arithmetic operations. Users can perform calculations using the on-screen buttons or their keyboard.

[Play the live preview here!](https://mxrislyna.github.io/project-calculator/)

## Tech Stack

* HTML
* CSS (Flexbox)
* JavaScript

## What I Learned

**August 18, 2026**

*begin entry*

I'm happy with my new discovery today. I was writing the delBtn listener and part of the logic is to automatically delete the spaces when deleting. I learned to write this logic and my favorite part is discovering that I can chain the methods into one line. This is in line 163 in script.js.

From-

```javascript
let shortenedText = text.trimEnd();
shortenedText = shortenedText.slice(0, -1);
shortenedText = shortenedText.trimEnd();
```

To-

```javascript
display.textContent = display.textContent.trimEnd().slice(0, -1)
.trimEnd();
```

So sleek!

*end entry*

**August 19, 2026**

*begin entry*

I learned to use `console.dir()`. This is extremely helpful because I was able to find the exact property that I needed.

I specifically used this to prevent my display from showing the elements under a parent container when being clicked. I'm ecstatic to discover this, truly!

*end entry*
