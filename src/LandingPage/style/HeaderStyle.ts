// ANIMATION
export const animNameFade = `animation`;

export const keyframesFade = `@-webkit-keyframes ${animNameFade} 
{0% {Opacity: 0} 100% {Opacity: 1}}`;

const animBorder = "moveGradient";

export const keyframesBorder = `@-webkit-keyframes ${animBorder} {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}`;

// STYLE
export const titleStyle = {
  fontFamily: "aileron",
  fontSize: "35px",
  color: "white",
  marginTop: "50px",
} as React.CSSProperties;

export const terminalContainerStyle = {
  opacity: 0,
  animation: animNameFade + " 2s linear 0s 1 normal forwards",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60vw",
  height: "600px",
  backgroundColor: "red",
  transform: "translate(-50%, -50%)",
} as React.CSSProperties;

export const terminalBorderStyle = {
  height: "600px",
  background: "linear-gradient(270deg, #ffffff, #33cccc, #006c6c)",
  backgroundSize: " 300% 300%",
  animation: `${animBorder} 5s alternate infinite`,
} as React.CSSProperties;

export const terminalTitleStyle = {
  fontWeight: "bold",
} as React.CSSProperties;

export const headerTerminalStyle = {
  paddingTop:"8px",
  marginLeft: "8px",
} as React.CSSProperties;

export const insideTerminalStyle = {
  position: "absolute",
  height: "555px",
  top: "40px",
  width: "99%",
  marginLeft: "0.5%",
  marginRight: "0.5%",
  backgroundColor: "black",
  borderRadius: "2px",
} as React.CSSProperties;

export const contentStyle = {
  width: "100%",
  height: "100%",
  padding: 20,
} as React.CSSProperties;

export const lineContainer = {
  display: "-webkit-inline-box",
  marginTop:"10px",
}