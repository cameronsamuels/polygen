PolyGEN is a JavaScript library for generating polygons on an HTML5 canvas.
It easily allows for developers to draw a polygon with a specified number of sides.

## Getting started
Download the [bin/polygen.js](https://git.io/vp4HZ) file to your workspace.
Then use this code relatively in your code:

### HTML
```html
<canvas width="2048" height="2048"></canvas>
<script src="polygen.js"></script>
```

### JavaScript
```javascript
//Declare canvas element
PolyGen.canvas = document.querySelector('canvas');
//Declare canvas context of the canvas element
PolyGen.context = PolyGen.canvas.getContext('2d');
//Declare the thickness of the lines of the shape
PolyGen.thickness = 4;
//Declare the color of the lines - it can be in any CSS color form (hex, rgb, rgba, name, etc)
PolyGen.color ='#222';
//Declare the size of the shape - the radius
PolyGen.size = 1024;
//Create the shape by calling this function - replace 5 with the number of sides
PolyGen.create(5);
```

*Be aware of the **[license](LICENSE)** for PolyGEN*
