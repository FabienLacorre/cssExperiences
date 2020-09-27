import React from "react";
import {
  titleStyle,
  titleContainerStyle,
  keyframesFade,
  titleBorderStyle,
  keyframesBorder,
  insideTitleContainer
} from "../style/HeaderStyle";
import { text } from "../text/fr";

class Header extends React.Component {
  render() {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframesFade, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframesBorder, styleSheet.cssRules.length);
    return (
      <div className="titleAnimation" style={titleContainerStyle}>
        <div style={titleBorderStyle}>
          <div style={insideTitleContainer}>
            <span style={titleStyle}>{text.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
