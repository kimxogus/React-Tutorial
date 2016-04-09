require("../../../css/ubaezi.css");

const React = require('react');
const ReactDOM = require('react-dom');

const Title = require('./Title');
const CategorySelector = require('./CategorySelector');
const StoreList = require('./StoreList');

const UBaeZi = React.createClass({
    getInitialState() {
        return {
            stores: [],
            category: 'chicken'
        }
    },

    componentDidMount() {
        this.loadStores(this.state.category);
    },

    loadStores(category){
        fetch("http://ubaezi.blueberry.ml/store/" + category + "?ref=web_react_tutorial")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    stores: data,
                    category
                });
            });
    },

    render() {
        const { category } = this.state;

        return (
            <div className="ubaezi-container">
                <Title category={category} />
                <CategorySelector category={category} onSelect={this.loadStores}/>
                <StoreList stores={this.state.stores}/>
            </div>
        )
    }
});

ReactDOM.render(
    <UBaeZi/>,
    document.getElementById("UBaeZi")
);