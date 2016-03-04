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