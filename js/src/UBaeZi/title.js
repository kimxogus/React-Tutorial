const React = require('react');

const categories = require('./categories');

const Title = React.createClass({
    render() {
        const { category } = this.props;

        let idx = categories.findIndex((e)=>e.name==category);

        return (
            <div className="col-xs-12">
                <h2>유배지</h2>
                <h4>{"현재 카테고리: " + categories[idx].label}</h4>
            </div>
        );
    }
});

module.exports = Title;