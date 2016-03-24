const React = require('react');

const categories = require('./categories');

const CategorySelector = React.createClass({
    propTypes: {
        category: React.PropTypes.string,
        onSelect: React.PropTypes.func
    },

    onChange(e) {
        this.props.onSelect(e.target.value);
    },

    render() {
        const { category } = this.props;

        return (
            <div className="col-xs-12">
                <select id="selectBox" name="category" onChange={this.onChange} value={category}>
                    {categories.map(e=>(<CategoryOption key={e.label} item={e}/>))}
                </select>
            </div>
        );
    }
});

const CategoryOption = React.createClass({
    render() {
        const { item } = this.props;

        return (
            <option value={item.name}>
                {item.label}
            </option>
        );
    }
});

module.exports = CategorySelector;