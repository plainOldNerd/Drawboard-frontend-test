import React from "react"
import rgba  from "../__lib__/unit_to_rgba"

export default props => <path {...{
    d:           props.Geometry,
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
    transform:   `matrix(${ props.Matrix.join(",") })`,
  }}/>
