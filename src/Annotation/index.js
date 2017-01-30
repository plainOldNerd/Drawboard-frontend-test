import React from "react"
import rgba  from "../__lib__/unit_to_rgba"

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

export default props => <path d={props.Geometry} stroke={rgba(props.StrokeColor)}
	strokeWidth={props.StrokeThickness} fill={rgba(props.FillColor)}
	transform={`matrix(${ props.Matrix.join(",") })`}
  	/>
