// Call this function to draw a polygon
// Parameters: c = number of sides, a = canvas, m = canvas context,
// e = shape radius, r = shape border thickness, o = shape border color,
// n = shape x position , s = shape y position
var PolyGen = function(c,a,m,e,r,o,n,s) {
	c = c || 4; // sides
	if (!a && !m) return; // canvas
	if (!m) m = a.getContext("2d"); // context
	if (!e) e = Math.min(a.width, a.height) / 2; // radius
	m.lineWidth = r || 8; // thickness
	m.strokeStyle = o || "#000"; // color
	if (!n) n =  a.width / 2; // x
	if (!s) s = a.height / 2; // y
	
	m.beginPath();
	m.moveTo(n +  e * Math.cos(0), s +  e *  Math.sin(0));          
	for (i = 1; i <= c; i++) m.lineTo(n + e * Math.cos(i * 2 * Math.PI / c), s + e * Math.sin(i * 2 * Math.PI / c));
	m.stroke();
};
