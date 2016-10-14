# Trail.JS
A customizable line that follows the cursor written in JS & jQuery

<img src="https://raw.githubusercontent.com/zuzurino/Trail/f4ff9477dfcdafd3db176dedcd71f59e995b97d9/Examples/example.gif" />


# Easy to use
\*\**Note: page must have jQuery inorder for Trail.JS to work properly*\*\*

> you can use Google's CND by including this header:
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

<a href="https://rawgit.com/zuzurino/Trail/master/trail.js"><h2>**Download RAW**</h2></a>

Or you can just add the JS file with this code 
```HTML
<script src="https://rawgit.com/zuzurino/Trail/master/trail.js"></script>
```

#Setup
> **Upon reload the canvas will apear at the back or the page because of** <code>z-index</code>
```CSS
z-index: -9999;
```
> **Behind all the elements in a page (9999 to be exact).**

> **Which might make it imposible to see, so if you want to change its** <code>z-index</code> **then use this syntax:**
```javascript
//Replace x with desired index to bring FORWARD or BACKWARD
$("#canvas").css({'z-index', 'x'}); 
```
> **You might also need to alter the** <code>z-index</code> **of other elements to make the trail visible well.**

> **To change other element's** <code>z-index</code> **use this syntax:**
```javascript
//Replace 'element' with desired jQuery selector
$('element').css({'z-index', 'x'}); 
```

#Customizable!

  Set different colors using this syntax: 
  ```javascript
linecolor = "color";
  ```
<img src="https://raw.githubusercontent.com/zuzurino/Trail/f4ff9477dfcdafd3db176dedcd71f59e995b97d9/Examples/color.png" />
---
---
  Change the width of the line using this syntax: 
  ```javascript
linewidth = x;
  ```
<img src="https://raw.githubusercontent.com/zuzurino/Trail/f4ff9477dfcdafd3db176dedcd71f59e995b97d9/Examples/width.png" />
---
---
