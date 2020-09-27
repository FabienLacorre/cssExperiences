import React from "react";
import Spinner from "react-loader-spinner";

class Loader extends React.Component {
  render() {
    console.log("RENDER");
    return (
      <div style={{
          height: "100%",
          marginLeft: "20px",
          marginRight: "15px",
      }}>
        <Spinner
          type="BallTriangle"
          color="#00BFFF"
          height={35}
          width={35}
          timeout={0}
        />
      </div>
    );
  }
}
export default Loader;
