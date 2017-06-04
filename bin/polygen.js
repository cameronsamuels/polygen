var PolyGen = {};
PolyGen.create = function(sides) {
	var size = PolyGen.size, x = (PolyGen.canvas.width / 2), y = (PolyGen.canvas.height / 2);
	PolyGen.context.beginPath();
	PolyGen.context.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          
	for (var i = 1; i <= sides;i += 1) {
	    PolyGen.context.lineTo(x + size * Math.cos(i * 2 * Math.PI / sides), y + size * Math.sin(i * 2 * Math.PI / sides));
	}
  	PolyGen.context.strokeStyle = PolyGen.color;
	PolyGen.context.lineWidth = PolyGen.thickness;
	PolyGen.context.stroke();
};
PolyGen.clear = function() {
	PolyGen.context.clearRect(0, 0, PolyGen.canvas.width, PolyGen.canvas.height);	
};
