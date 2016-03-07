// Load React
const React = require('react');

// Create React component class named Content.
// NOTE: The first character of React component class name HAVE TO BE Uppercase!
const Content = React.createClass({

    // Render method
    // render method is mandatory method of all React component classes.
    render: function() {
        return (
            <h3>Web Develop Team is the BEST!</h3>
        );
    }
});

// Exports the Content class.
module.exports = Content;