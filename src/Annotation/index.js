import React from "react"
import rgba  from "../__lib__/unit_to_rgba"

/*
	LIGHT BULB
	"This is because we are applying the transformation matrix to the shapes as 
	a whole after the fact (transform attribute on the path element) instead of 
	individually to the data that represents the shape before it is rendered on 
	the screen" means we DON'T do <path ... transform="someCrap" />. 
	We need to pre-calculate the d before returning a <path d="..." ... />
 */

export default props => <path d={props.Geometry} stroke={rgba(props.StrokeColor)}
	strokeWidth={props.StrokeThickness} fill={rgba(props.FillColor)}
	transform={calculateTransform(props.Matrix)}
  	/>
/*
export default props => <path {...{
    d:           props.Geometry,
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
    // this next line is somehow the problem
    transform:   `matrix(${ props.Matrix.join(",") })`,
  }}/>
*/

// USELESS NOTES TO ILLUSTRATE THINKING

/*
var calculateTransform = function(Matrix){
	var matrixString = 'matrix(';

	for(var i=0; i<6; ++i){
console.log('Matrix['+i+'] = '+Matrix[i]);
		matrixString += Matrix[i];
		if( i==5 ) continue;
		matrixString += ',';
	}

	matrixString += ')';
console.log('matrixString = '+matrixString);
	return matrixString;
}

export default props => <path d={props.Geometry} stroke={rgba(props.StrokeColor)}
	strokeWidth={props.StrokeThickness} fill={rgba(props.FillColor)}
	transform={calculateTransform(props.Matrix)}
  	/>
*/
/*
	Nyah-huh, some insight into what that damned dollar sign does. Still no clue
	about the apostrophe marks.
	Probably should've just looked here 
	http://stackoverflow.com/questions/35835362/what-does-dollar-sign-and-curly-braces-mean-in-a-string-in-javascript
*/