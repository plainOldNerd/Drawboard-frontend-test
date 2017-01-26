import css   from "./styles.css"
import React from "react"
import Ax    from "../Annotation"
import axs   from "../annotation_api_data"

export default _props =>
  <div className={ css.app }>
    <svg className={ css.canvas } viewBox="0 0 900 900">
      { axs.map(ax => <Ax key={ ax.Id } { ...ax }/>) }
    </svg>
  </div>
