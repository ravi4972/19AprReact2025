const heading = React.createElement("h2",{id:"headingH2",xyzprops:"propsValue"},"REACT with CDN")

const theoryCovered=[
    "React.createElement will accept 3 parameters, 1st is the tag name, 2nd is the props and 3rd is the content",
    "And it will continue to take other elements as children",
    "React.createElement will create JS object not the HTML element",
    "ReactDOM.render will render the JS object to the HTML element",
    "We could enable props for the react element",
    "Creating element using React.createElement cause more mesh up in the code than normal Html",
    "So this will give us a better understanding of Why to use JSX??",
]
const liItems = theoryCovered.map((i,index)=>{
    return React.createElement("li",{id:"list",key:index},i)
})

const ulElement = React.createElement("ul",{id:"ul"},liItems)

const div = React.createElement("div",null,heading,ulElement)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div)