# jsrepl-packed
 @replit's (deprecated) JSRepl project but fixed, compiled, and modified into a repo and library for public and very simple usage.

# Add to site 

## Add from CDN
Add this to your `<head>` to use JSrepl:
```html
<!DOCTYPE HTML>
<html>
 <head>
  <script src="https://cdn.jsdelivr.net/gh/Unzor/jsrepl-packed/dist/jsrepl-lib.js" id="jsrepl-script"></script>
 </head>
<body>
<script>
var jsrepl = new JSREPL({
    input: function() {
        prompt('Input:')
    },
    output: function(a) {
        alert(a);
    }
});

window.interpret = function(lang, code) {
    jsrepl.loadLanguage(lang, function() {
        console.log('loaded');
        jsrepl.eval(code);
    });
};
</script>
</body>
</html>
```

## Building
First, download the [build.zip](https://github.com/Unzor/jsrepl-packed/raw/main/dist/build.zip) archive and extract it in a webserver, or run ```git clone https://github.com/Unzor/jsrepl-packed``` and then extract all directories and files by running ``` cd jsrepl-packed && find . -maxdepth 1 -exec mv {} .. \; && cd ../ && rmdir jsrepl-packed```.

Once finished, you may now use the compiled library like this to interpret a language:
```html
<!DOCTYPE HTML>
<html>
 <head>
  <script src="jsrepl.js" id="jsrepl-script"></script>
 </head>
<body>
<script>
var jsrepl = new JSREPL({
    input: function() {
        prompt('Input:')
    },
    output: function(a) {
        alert(a);
    }
});

window.interpret = function(lang, code) {
    jsrepl.loadLanguage(lang, function() {
        console.log('loaded');
        jsrepl.eval(code);
    });
};
</script>
</body>
</html>
 ```
 
 Once you visit the web port, you can interpret a language by opening the console in DevTools and running this:
 ```javascript
 interpret(<programming language to interpret>, <code>)
 ```
 
 For example, to run the Hello World program in Lua, run this:
  ```javascript
 interpret("lua", 'print("Hello World!")');
 ```
