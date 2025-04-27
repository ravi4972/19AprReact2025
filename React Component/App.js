import React from "react";
import ReactDOM from "react-dom/client";

import {BodyComponent} from './BodyComponent'

const subheader = React.createElement("h2",{key:"subHeading"},"We are providing inline style to react element")

const header = React.createElement("h1",{key:"mainHeading",style: {
    backgroundColor: "lightblue"
  }},"This is about React Element and Component")

const content = React.createElement("p",{key:"content",style:{fontSize:"20px",backgroundColor:"#f0f0f0"}},
    "We could do inline styling by passing style object inside React element parameter, if it is valid it will be rendered else it will be considered as props to the element")

const div = React.createElement("div",{},[header,subheader,content,BodyComponent({key:"bodyyy"})])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(div)