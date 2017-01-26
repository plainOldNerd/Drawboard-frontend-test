import compose from "./__lib__/compose"

export default [
  {
    Id:              1,
    StrokeThickness: 25,
    StrokeColor:     "FFFF0066",
    FillColor:       "33000000",
    Geometry:        "M100,100 L400,100 L400,400 L100,400 Z",
    Matrix:          [2,0,0,1,0,0],
  },

  {
    Id:              2,
    StrokeThickness: 25,
    StrokeColor:     "FF0066FF",
    FillColor:       "00000000",
    Geometry:        "M200,200 L600,500",
    Matrix:          [1,0,0,0.5,0,0],
  },

  {
    Id:              3,
    StrokeThickness: 25,
    StrokeColor:     "FFFF6600",
    FillColor:       "00000000",
    Geometry:        "M400,300 L500,500 L200,500 L70,400",
    Matrix:          compose(
                       [0.5,0,0,1.5,10,0],
                       [-1,0,0,1,0,0],
                       [0,1,-1,0,0,0],
                     ),
  },
]
