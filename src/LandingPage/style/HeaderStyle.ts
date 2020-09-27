export const titleStyle = {
  fontFamily: "aileron",
  fontSize: "35px",
  color: "white",
} as React.CSSProperties;

export const animNameFade = `animation`;

export const keyframesFade = `@-webkit-keyframes ${animNameFade} 
{0% {Opacity: 0} 100% {Opacity: 1}}`;

export const titleContainerStyle = {
  opacity: 0,
  animation: animNameFade + " 2s linear 0s 1 normal forwards",
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
} as React.CSSProperties;

const animBorder = "moveGradient";
export const keyframesBorder = `@-webkit-keyframes ${animBorder} {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}`;

export const titleBorderStyle = {
  padding: "3px 3px 3px 3px",
  borderRadius: 5,
  background: "linear-gradient(270deg, #ffffff, #33cccc, #006c6c)",
  backgroundSize: " 300% 300%",
  animation: `${animBorder} 5s alternate infinite`,
};

export const insideTitleContainer = {
    backgroundColor: "black",
    borderRadius: "2px",
    padding: 20
  } as React.CSSProperties;
