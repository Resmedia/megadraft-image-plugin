/*
 * Copyright (c) 2017, Itai Reuveni <itaireuveni@gmail.com>
 *
 * License: MIT
 */

import React, {Component} from "react";

export default class SvgIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="svgIcon svgIcon--imageInsetCenter svgIcon--25px">
        <svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25" style={this.props.fill}>
          <path
            d={this.props.path}
            fillRule="evenodd"
          />
        </svg>
      </span>
    );
  }
}



