const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
    render: function() {
        return (
            <div>
                {"Hello " + this.props.name + "!"}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="HeXA"/>,
    document.getElementById("container")
);