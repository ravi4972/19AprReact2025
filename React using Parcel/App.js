import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

const header = React.createElement("h1",{id:'header'},"React with parcel")

const items = [
    "Here we are importing react and react-dom from npm",
    "Here we are using parcel to bundle our app",
    "Parcel is a bundler, which helps to bundle our app and make it ready for production",
    React.createElement(
        "span",
        {},
        "Get other features of Parcel from the official website ",
        React.createElement("a", { href: "https://parceljs.org/", target: "_blank" }, "click here")
    ),
];

const listItems = items.map((item,index) => {
    return React.createElement("li", {key: index}, item)
})

const list = React.createElement("ul", {},listItems)

const div = React.createElement("div", {}, header, list)

root.render(div)


