var PolyGen = {rotate:0,color:"#000",thickness:8,coords:{}};
PolyGen.create = function(s) {
	var c = PolyGen.context || PolyGen.canvas.getContext('2d');
	c.rotate(PolyGen.rotate);
	var sz = PolyGen.size || Math.min(PolyGen.canvas.width/2,PolyGen.canvas.height/2),
	x = PolyGen.coords.x || (PolyGen.canvas.width / 2), y = PolyGen.coords.y || (PolyGen.canvas.height / 2);
	c.beginPath();
	c.moveTo (x +  sz * Math.cos(0), y +  sz *  Math.sin(0));          
	for (var i = 1; i <= s;i += 1) c.lineTo(x + s * Math.cos(i * 2 * Math.PI / s), y + sz * Math.sin(i * 2 * Math.PI / s));
  	c.strokeStyle = PolyGen.color;
	c.lineWidth = PolyGen.thickness;
	c.stroke();
	PolyGen.context = c;
};
PolyGen.clear = function() {
	PolyGen.context.clearRect(0, 0, PolyGen.canvas.width, PolyGen.canvas.height);	
};
