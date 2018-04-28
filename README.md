PolyGEN is an HTML canvas JavaScript library for generating polygons on a canvas.

# Get started
First download [bin/polygen.js](bin/polygen.js) to your code folder. Then use this code relatively in your app:

### HTML
```html
<canvas width="4096" height="4096"></canvas>
<script src="bin/polygen.min.js"></script>
```

### JavaScript
```javascript
//Declare canvas element
PolyGen.canvas = document.querySelector('canvas');
//Declare canvas context of the canvas element
PolyGen.context = PolyGen.canvas.getContext('2d');
//Declare the thickness of the lines of the shape
PolyGen.thickness = 8;
//Declare the color of the lines - it can be in any CSS color form (hex, rgb, rgba, name, etc)
PolyGen.color ='#2a2a2a';
//Declare the size of the shape - the radius
PolyGen.size = 2048;
//Create the shape by calling this function - replace 5 with the number of sides
PolyGen.create(5);
```

*Be aware of the **[license](LICENSE)** for PolyGEN*
