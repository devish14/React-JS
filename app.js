// const headings = React.createElement("h1",{id:"heading1", className:"align"},"Welcome to React using React-JS");

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { className: "align" },
      "I am the H1 tag inside the nested div"
    ),
    React.createElement("h2", { className: "align1" }, "Iam the siblings H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { className: "align" },
      "I am the H1 tag inside the nested div CHILD 2"
    ),
    React.createElement(
      "h2",
      { className: "align1" },
      "Iam the siblings H2 IN CHILD 2"
    ),
  ]),
]);
console.log(heading); // object will be created on the heading

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
