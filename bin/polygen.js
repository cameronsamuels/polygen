var PolyGen = {coords:{}};
PolyGen.create = function(s) {
	if (s) PolyGen.sides = s;
	else s = PolyGen.sides;
	var c = PolyGen.context || PolyGen.canvas.getContext('2d');
	var sz = PolyGen.size || Math.min(PolyGen.canvas.width/2,PolyGen.canvas.height/2),
	x = PolyGen.coords.x || (PolyGen.canvas.width / 2), y = PolyGen.coords.y || (PolyGen.canvas.height / 2);
	c.beginPath();
	c.moveTo (x +  sz * Math.cos(0), y +  sz *  Math.sin(0));          
	for (var i = 1; i <= s;i += 1) c.lineTo(x + sz * Math.cos(i * 2 * Math.PI / s), y + sz * Math.sin(i * 2 * Math.PI / s));
  	c.strokeStyle = PolyGen.color || "#000";
	c.lineWidth = PolyGen.thickness || 8;
	c.stroke();
	PolyGen.context = c;
};
PolyGen.clear = function() {
	PolyGen.context.clearRect(0, 0, PolyGen.canvas.width, PolyGen.canvas.height);	
};
PolyGen.rotate = function(r) {
	if (PolyGen.canvas) var cv = PolyGen.canvas
	else return;
	c = PolyGen.context || cv.getContext('2d');
	var width = cv.width;
	cv.width = cv.height, cv.height = width;
    	c.translate(cv.width / 2, cv.height / 2);
	PolyGen.rotation = PolyGen.rotation || 0;
	PolyGen.rotation += r;
	c.rotate(PolyGen.rotation);
	s = PolyGen.sides || 5;
	var sz = PolyGen.size || Math.min(cv.width/2,cv.height/2),
	x = -PolyGen.coords.x || (-cv.width / 64), y = -PolyGen.coords.y || (-cv.height / 64);
	c.beginPath();
	c.moveTo (x +  sz * Math.cos(0), y +  sz *  Math.sin(0));          
	for (var i = 1; i <= s;i += 1) c.lineTo(x + sz * Math.cos(i * 2 * Math.PI / s), y + sz * Math.sin(i * 2 * Math.PI / s));
  	c.strokeStyle = PolyGen.color || "#000";
	c.lineWidth = PolyGen.thickness || 8;
	c.stroke();
	PolyGen.context = c;
	c.rotate(-PolyGen.rotation);
	c.translate(-cv.width / 2, -cv.height / 2);
}
