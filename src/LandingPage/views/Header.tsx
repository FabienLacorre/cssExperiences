import React from "react";
import {
  titleStyle,
  terminalContainerStyle,
  keyframesFade,
  terminalBorderStyle,
  keyframesBorder,
  insideTerminalStyle,
  contentStyle,
  headerTerminalStyle,
  terminalTitleStyle,
  lineContainer
} from "../style/HeaderStyle";
import { text } from "../text/fr";
import Loader from "./Loader";

class Header extends React.Component {
  render() {
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframesFade, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframesBorder, styleSheet.cssRules.length);
    return (
      <div className="titleAnimation" style={terminalContainerStyle}>
        <div style={terminalBorderStyle}>
          <div style={headerTerminalStyle}>
            <span style={terminalTitleStyle}>Ubuntu 20.04</span>
          </div>
          <div style={insideTerminalStyle}>
            <div style={contentStyle}>
              <div style={lineContainer}>
                <span style={titleStyle}>{text.pointer}</span>
                <span style={titleStyle}>{text.title}</span>
              </div>
              <div style={lineContainer}>
                <span style={titleStyle}>{text.pointer}</span>
                <span style={titleStyle}>{text.initialization}</span>
                <Loader></Loader>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
