import React from "react"
import rgba  from "../__lib__/unit_to_rgba"
// Many thanks to this commented out file, but it caused compilation errors. :(
//import transform_point from "../__lib__/xform_point"

/*
	LIGHT BULB
	"This is because we are applying the transformation matrix to the shapes as 
	a whole after the fact (transform attribute on the path element) instead of 
	individually to the data that represents the shape before it is rendered on 
	the screen" means we DON'T do <path ... transform="someCrap" />. 
	We need to pre-calculate the d before returning a <path d="..." ... />
	In other words, we need to multiply 
	Geometry: "M100,100 L400,100 L400,400 L100,400 Z" with Matrix: [2,0,0,1,0,0]
	for example. Bring on the alcohol and let's get it happening!
 */
/*
	A little regex and xform_point from src/__lib__ directory should do the job!
	Unfortunately, while a little alcohol would help I have none available. :'(
*/

var transform_point = function([x, y], [a, d, b, e, c, f]){
	return {x: a*x+b*y+c, y: d*x+e*y+f};
}

/*
	This method takes the geometry as 
	M or m followed immediately by 2 comma separated co-ordinates
	L or l followed immediately by 2 comma separated co-ordinates
	H or h followed immediately by 1 ordinate
	V or v followed immediately by 1 ordinate
	Z followed by nothing (ordinates or otherwise)
	and replaces all ordinates in the string with their transformed ordinates.
 */
// example of Geometry "M100,100 L400,100 H400 V400 Z"
var convertGeometry = function(Geometry, Matrix){

console.log('Geometry = ' + Geometry);

	var geom = '';
	var index = 0;

	while(index < Geometry.length){
		var nextCmd = Geometry.substr(index,1);
		geom += nextCmd;

		switch(nextCmd){
			case 'M':
			case 'm':
			case 'L':
			case 'l':

				index += 9;
				break;
			case 'H':
			case 'h':

				index += 5;
				break;
			case 'V':
			case 'v':

				index += 5;
				break;
			case 'Z':
			case 'z':
				index += 2;
				break;
			default:
				console.log('enslave the humans!');
		}
	}
console.log('geom = ' + geom);
	return geom;
}

export default props => <path d={convertGeometry(props.Geometry,props.Matrix)} 
	stroke={rgba(props.StrokeColor)} strokeWidth={props.StrokeThickness} 
	fill={rgba(props.FillColor)}
  	/>
