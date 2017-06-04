PolyGEN is an HTML canvas JavaScript library for generating polygons on a canvas.

# Get started

First download [polygen.js](polygen.js) to your code folder. Then use this code relatively in your app:

### HTML
```html
<canvas id="canvas" width="4096" height="4096"></canvas>
<script src="polygen.js"></script>
```
### JavaScript
```javascript
//Declare canvas element
PolyGen.canvas = document.getElementById('canvas');
//Declare canvas context of the canvas element
PolyGen.context = PolyGen.canvas.getContext('2d');
//Declare the thickness of the lines of the shape
PolyGen.thickness = 8;
//Declare the color of the lines - it can be in any CSS color form (hex, rgb, rgba, name, etc)
PolyGen.color ='#2a2a2a';
//Declare the size of the shape - best if it's 1/10 of the canvas height and width
PolyGen.size = 409.6;
//Create the shape by calling this function - replace 5 with the number of sides
PolyGen.create(5);
```

*Be aware of the **[license](LICENSE)** for PolyGEN as shown in the license file.*

# About

This library was made by Cameron Samuels, inspired by [Ludum Dare 35](http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=91735) when desperately needing to generate a polygon with any amount of sides.
