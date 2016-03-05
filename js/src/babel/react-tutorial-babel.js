const Content = React.createClass({
    render: function() {
        return (
            <h3>Web Develop Team is the BEST!</h3>
        );
    }
});

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