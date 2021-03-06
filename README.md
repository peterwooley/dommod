# DOMMod
If you need to modify some HTML in a way that can't be accomplished with a simple Find & Replace and [using RegEx doesn't feel quite right](http://stackoverflow.com/a/1732454/1245595) then DOMMod can help.

Load up some HTML, modify it with JavaScript ([care of Cheerio](https://github.com/MatthewMueller/cheerio)), and output the modified DOM!

# Examples
## Command-line
```sh
$ npm install dommod -g
$ echo "<html><body class='test'></body></html>" > dom.html
$ dommod "dom('body').removeAttr('class')" dom.html 
<html><body></body></html>
```

## In Node
```js
var dommod = require('dommod');
var html = "<html><body class='test'></body></html>";
var script = "dom('body').removeAttr('class')";
dommod(html, script) // Returns <html><body></body></html>
```

# Gotcha
After the markup you provide is parsed and modified by your script, the output may change in subtle ways (beyond the changes you made with your script). Some things that will change: single-quoted attributes are changed to double-quotes and self-closing tags lose their trailing forward-slash. If this poses a problem for your use case, diff the input and output to review the differences:

```sh
$ dommod "dom('body').remove()" input.html > output.html
$ diff input.html output.html
```
