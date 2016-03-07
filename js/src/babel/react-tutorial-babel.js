// No loading React and ReactDOM.
// They are in head in html.

// Hello component
const Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{"Hello " + this.props.name + "!"}</h1>
                <Content/>
            </div>
        );
    }
});

// Rendering
ReactDOM.render(
    <Hello name="HeXA"/>,
    document.getElementById("container")
);