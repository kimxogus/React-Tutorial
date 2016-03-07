// Load React and ReactDOM
// ReactDOM is rendering library of React
const React = require('react');
const ReactDOM = require('react-dom');

// Load Content component
const Content = require('./Content');

// Creates Hello component class
const Hello = React.createClass({

    // Inside Hello component, Content is included
    render: function() {
        return (
            <div>
                <h1>{"Hello " + this.props.name + "!"}</h1>
                <Content/>
            </div>
        );
    }
});

// Render Hello component in DOM with id 'container'
ReactDOM.render(
    <Hello name="HeXA"/>,
    document.getElementById("container")
);