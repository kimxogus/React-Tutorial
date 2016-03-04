const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{"Hello " + this.props.name + "!"}</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="HeXA"/>,
    document.getElementById("container")
);