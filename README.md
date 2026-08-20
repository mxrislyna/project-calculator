**August 18, 2026**

*begin entry*

I'm happy with my new discovery today. I was writing the delBtn
listener and part of the logic is to automatically delete the spaces
when deleting. I learned to write this logic and my favorite part
is discovering that I can chain the methods into one line. This is
in line 79 in script.js. 

From-
let shortenedText = text.trimEnd();
shortenedText = shortenedText.slice(0, -1);
shortenedText = shortenedText.trimEnd();

To-
display.textContent = display.textContent.trimEnd().slice(0, -1)
.trimEnd();

So sleek!

*end entry*
