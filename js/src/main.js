require("../../css/main.css");

const React = require('react');
const ReactDOM = require('react-dom');

const Menu = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="menu-item">
                    <a href={this.props.item.url}>
                        <span>{this.props.item.label}</span>
                    </a>
                </div>
            </div>
        );
    }
});

const Section = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-xs-12 col-sm-6 section">
                    <div className="row section-label">
                        {this.props.item.label}
                    </div>
                    {this.props.item.items.map((e)=>(<Menu key={e.label} item={e}/>))}
                </div>
            </div>
        );
    }
});

const MenuList = React.createClass({
    render() {
        return (
            <div className="menu">
                {this.props.menu.map(e=>(<Section key={e.label} item={e}/>))}
            </div>
        )
    }
});

const menu = [
    {
        label: "Intro",
        items: [
            {
                label: "React not using NPM",
                url: "without_npm.html"
            },
            {
                label: "React using Babel Watcher",
                url: "with_npm.html"
            },
            {
                label: "React using Webpack",
                url: "with_webpack.html"
            }
        ]
    },
    {
        label: "Example",
        items: [
            {
                label: "UBaeZi Example",
                url: "ubaezi.html"
            }
        ]
    }
];

ReactDOM.render(
    <MenuList menu={menu}/>,
    document.getElementsByClassName("container")[0]
);