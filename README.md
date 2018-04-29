PolyGEN is a JavaScript library for generating polygons on an HTML5 canvas.
It easily allows for developers to draw a polygon with a specified number of sides.

## Getting started
Download the [polygen.js](https://git.io/vp4QI) file to your workspace.
Then use this code relatively in your code:

### HTML
```html
<canvas width="2048" height="2048"></canvas>
<script src="polygen.js"></script>
```

### JavaScript
```javascript
// Draw a 3 sided polygon (triangle) on the canvas element's context,
// with a radius of 1000, border thickness of 8, border color of #222, and centered
PolyGen(3, document.querySelector("canvas"), 0, 1000, 8, "#222", 0, 0);
```

*Be aware of the **[license](https://git.io/vpBcx)** for PolyGEN*
