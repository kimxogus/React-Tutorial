const React = require('react');

const StoreList = React.createClass({
    propTypes:{
        stores: React.PropTypes.array
    },

    onChange(e) {
        this.props.onSelect(e.target.value);
    },

    render() {
        const { stores } = this.props;

        return stores.length > 0
            ? (
            <div className="col-xs-12">
                {stores.map(e=>(<StoreRow key={e._id} item={e}/>))}
            </div>
        )
            : (
            <div className="col-xs-12">
                <h1>카테고리를 선택하세요.</h1>
            </div>
        );
    }
});

const StoreRow = React.createClass({
    render() {
        const { item } = this.props;

        return (
            <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {item.name}
                    </div>
                    <div className="panel-body">
                        {"전화번호: " + item.call}
                    </div>
                    <div className="panel-footer">
                        {item.location}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = StoreList;