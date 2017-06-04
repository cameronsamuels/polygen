PolyGEN is a HTML canvas JavaScript library for generating polygons on a canvas.

# Get started

First download polygen.js to your code folder. Then use this code relatively in your app:

### HTML
```html
<canvas id="canvas" width="4096" height="4096"></canvas>
<script src="polygen.js"></script>
```
### JavaScript
```javascript
//Canvas element
PolyGen.canvas = document.getElementById('canvas');
//Canvas context
PolyGen.context = PolyGen.canvas.getContext('2d');
//Thickness of the lines (the shape's sides)
PolyGen.thickness = 8;
//Color of lines - it can be in any CSS color form (hex, rgb, rgba, name, etc)
PolyGen.color ='#2a2a2a';
//Size of shape - best if its 1/10 of the canvas height/width
PolyGen.size = 409.6;
//Create by calling this function - replace 5 with the number of sides
PolyGen.create(5);
```

*Be aware of the **license** to PolyGEN as shown in the license file.*

# About

This library was made by Cameron Samuels, inspired by [Ludum Dare 35](http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=91735) when I despreately needed to generate a polygon with any amount of sides.
