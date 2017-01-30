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

	var geom = '';

	while(0 < Geometry.length){
		var nextCmd = Geometry.substr(0,1);
		geom += nextCmd;
		Geometry = Geometry.substr(1,Geometry.length-1);

		switch(nextCmd){
			case 'M':
			case 'm':
			case 'L':
			case 'l':
				var regex = /\d+/i;
				// get the untransformed x co-ord
				var xCoOrd = Geometry.match(regex)[0];

				Geometry = Geometry.substr(Geometry.indexOf(',')+1,
					Geometry.length-1);
				// Get the untransformed y co-ord
				var yCoOrd = Geometry.match(regex)[0];

				if( Geometry.indexOf(' ') != -1 ){
					Geometry = Geometry.substr(Geometry.indexOf(' ')+1,
						Geometry.length-1);
				}
				else {
					Geometry = '';
				}

				var transCoOrds = transform_point([xCoOrd,yCoOrd],Matrix);
				xCoOrd = transCoOrds.x;
				yCoOrd = transCoOrds.y;
				geom += xCoOrd+',';
				geom += yCoOrd+' ';

				break;
			case 'H':
			case 'h':
				var regex = /\d+/i;
				// figure out if this should be x or y! fix things accordingly if
				// this is wrong!
				var xCoOrd = Geometry.match(regex)[0];
				var yCoOrd = 0;

				if( Geometry.indexOf(' ') != -1 ){
					Geometry = Geometry.substr(Geometry.indexOf(' ')+1,
						Geometry.length-1);
				}
				else {
					Geometry = '';
				}

				var transCoOrds = transform_point([xCoOrd,yCoOrd],Matrix);
				xCoOrd = transCoOrds.x;
				yCoOrd = transCoOrds.y;
				geom += xCoOrd+' ';

				break;
			case 'V':
			case 'v':
				var regex = /\d+/i;
				// figure out if this should be x or y! fix things accordingly if
				// this is wrong!
				var xCoOrd = 0;
				var yCoOrd = Geometry.match(regex)[0];

				if( Geometry.indexOf(' ') != -1 ){
					Geometry = Geometry.substr(Geometry.indexOf(' ')+1,
						Geometry.length-1);
				}
				else {
					Geometry = '';
				}

				var transCoOrds = transform_point([xCoOrd,yCoOrd],Matrix);
				xCoOrd = transCoOrds.x;
				yCoOrd = transCoOrds.y;
				geom += yCoOrd+' ';

				break;
			case 'Z':
			case 'z':
				Geometry = '';
				break;
			default:
				console.log('enslave the humans!');
		}
	}

	return geom;
}

export default props => <path d={convertGeometry(props.Geometry,props.Matrix)} 
	stroke={rgba(props.StrokeColor)} strokeWidth={props.StrokeThickness} 
	fill={rgba(props.FillColor)}
  	/>
