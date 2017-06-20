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
PolyGen.draw = function(c,a,m,e,r,o,n,s) {
	c = c || 5; if (!a) return; if (!m) m = a.getContext('2d');
	if (!e) e = Math.min(a.width, a.height);
	if (!n) n =  a.width / 2; if (!s) s = a.height / 2;
	m.beginPath();
	m.moveTo (n +  e * Math.cos(0), s +  e *  Math.sin(0));          
	for (i = 1; i <= c;i += 1) m.lineTo(n + e * Math.cos(i * 2 * Math.PI / c), s + e * Math.sin(i * 2 * Math.PI / c));
  	m.strokeStyle = o || "#000";
	m.lineWidth = r || 8;
	m.stroke();
};
PolyGen.clear = function() {
	PolyGen.context.clearRect(0, 0, PolyGen.canvas.width, PolyGen.canvas.height);	
};
PolyGen.setContext = function(e) {
	PolyGen.context = PolyGen.canvas.getContext(e||"2d");
};
PolyGen.reset = function() {
	delete PolyGen.coords.x;
	delete PolyGen.coords.y;
	delete PolyGen.size;
	delete PolyGen.color;
	delete PolyGen.rotation;
	delete PolyGen.sides;
	delete PolyGen.canvas;
	delete PolyGen.context;
	delete PolyGen.thickness;
}
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
