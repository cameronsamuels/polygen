/* PolyGen v3.1 | MIT License | git.io/fjq8z */
function PolyGen(c,a,m,e,r,o,n,s) {
	c = c || 3; // sides
	if (!a && !m) return; // canvas
	if (!m) m = a.getContext("2d"); // context
	if (!e) e = Math.min(a.width, a.height) / 2; // radius
	m.lineWidth = r || 8; // thickness
	m.strokeStyle = o || "#000"; // color
	if (!n) n =  a.width / 2; // x
	if (!s) s = a.height / 2; // y
	
	m.beginPath();
	m.moveTo(n +  e * Math.cos(0), s +  e *  Math.sin(0));          
	for (i = 1; i <= c + 1; i++) m.lineTo(n + e * Math.cos(i * 2 * Math.PI / c), s + e * Math.sin(i * 2 * Math.PI / c));
	m.stroke();
}
