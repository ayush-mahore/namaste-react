
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [React.createElement("h1", { id: "heading" }, "Hello --> C1"),
            React.createElement("h2", { id: "heading2" }, "Hello2 --> C1"),
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", { id: "heading" }, "Hello --> C2"),
            React.createElement("h2", { id: "heading2" }, "Hello2 --> C2"),
            ]
        ),
    ]
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);