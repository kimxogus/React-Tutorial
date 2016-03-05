const React = require('react');
const ReactDOM = require('react-dom');

const Content = require('./Content');

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

ReactDOM.render(
    <Hello name="HeXA"/>,
    document.getElementById("container")
);