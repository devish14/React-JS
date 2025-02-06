import React from "react";
import ReactDOM from "react-dom/client";

// BASIC WAY OF REACT CODE

// const headings = React.createElement("h1",{id:"heading1", className:"align"},"Welcome to React using React-JS");

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement(
//       "h1",
//       { className: "align" },
//       "I am the H1 tag inside the nested div"
//     ),
//     React.createElement("h2", { className: "align1" }, "Iam the siblings H2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement(
//       "h1",
//       { className: "align" },
//       "I am the H1 tag inside the nested div CHILD 2"
//     ),
//     React.createElement(
//       "h2",
//       { className: "align1" },
//       "Iam the siblings H2 IN CHILD 2"
//     ),
//   ]),
// ]);
// console.log(heading); // object will be created on the heading

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX WAY OF REACT CODE
// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

// const jsxHeading = (
//   <h1 id="heading" className="align">
//     React using JSX
//   </h1>
// );

// console.log(jsxHeading); // this is a object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Functional Component

const Title = () => {
  return <h1 className="align">Welcome to the React</h1>;
};
const value = "I am a JS parenthesis value";
const reactElement = <div className="align">I am a react Element</div>;

// Component Composition - Here we are using the Title component inside the HeadingComponent

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {/* {Title()} - this is a function call we can use like this also */}
      {Title()}
      <h2 id="heading1" className="align1">
        This is a Functional Component, {value}
      </h2>
      <h3 className="align2">
        I am the using Component composition in this function and also using a
        JS parenthesis {100 + 200} 300 is a parenthesis value
      </h3>
      <h4>{value}</h4>
      <h5>{reactElement}</h5>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
