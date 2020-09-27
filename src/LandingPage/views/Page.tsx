import React from "react";
import Header from "./Header";
import { FullPageContainer } from "../style/PageStyle";

class Page extends React.Component {
  render() {
    return (
      <div style={FullPageContainer}>
        <Header></Header>
      </div>
    );
  }
}

export default Page;
