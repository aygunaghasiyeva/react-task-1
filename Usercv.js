import React, { Component } from "react";
import ReactDOM from "react-dom";
import Personalinfo from "./Personalinfo";
import Experience from "./Experience";
import Contacts from "./Contacts";
import '../Css/usercv.css'
class Usercv extends Component {
  render() {
    return (
      <div className="app">
      <Personalinfo />
      <Experience />
      <Contacts />
    </div>
    );
  }
}

export default Usercv

const rootElement = document.querySelector("#root");
ReactDOM.render(<Usercv />, rootElement);