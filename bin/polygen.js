var PolyGen = {rotate:0,color:"#000",thickness:8};
PolyGen.create = function(s) {
	PolyGen.context.rotate(PolyGen.rotate);
	var context = PolyGen.context || PolyGen.canvas.getContext('2d');
	var size = PolyGen.size || Math.min(PolyGen.width/2,PolyGen.height/2), x = (PolyGen.canvas.width / 2), y = (PolyGen.canvas.height / 2);
	PolyGen.context.beginPath();
	PolyGen.context.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          
	for (var i = 1; i <= s;i += 1) {
	    PolyGen.context.lineTo(x + s * Math.cos(i * 2 * Math.PI / s), y + size * Math.sin(i * 2 * Math.PI / s));
	}
  	PolyGen.context.strokeStyle = PolyGen.color;
	PolyGen.context.lineWidth = PolyGen.thickness;
	PolyGen.context.stroke();
};
PolyGen.clear = function() {
	PolyGen.context.clearRect(0, 0, PolyGen.canvas.width, PolyGen.canvas.height);	
};
