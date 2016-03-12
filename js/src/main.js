require("../../css/main.css");

const React = require('react');
const ReactDOM = require('react-dom');

const Menu = React.createClass({
    render() {
        const { item } = this.props;

        return (
            <div className="row">
                <div className="menu-item">
                    <a href={item.url}>
                        <span>{item.label}</span>
                    </a>
                </div>
            </div>
        );
    }
});

const Section = React.createClass({
    render() {
        const { section } = this.props;

        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-xs-12 col-sm-6 section">
                    <div className="row section-label">
                        {section.label}
                    </div>
                    {section.items.map((e)=>(<Menu key={e.label} item={e}/>))}
                </div>
            </div>
        );
    }
});

const MenuList = React.createClass({
    render() {
        return (
            <div className="menu">
                {this.props.menu.map(e=>(<Section key={e.label} section={e}/>))}
            </div>
        )
    }
});

const menu = [
    {
        label: "HTML & JAVASCRIPT",
        items: [
            {
                label: "HTML",
                url: "1_html.html"
            },
            {
                label: "JAVASCRIPT",
                url: "1_javascript.html"
            }
        ]
    },
    {
        label: "React Tutorial",
        items: [
            {
                label: "React not using NPM",
                url: "2_without_npm.html"
            },
            {
                label: "React using Babel Watcher",
                url: "2_with_babel_watcher.html"
            },
            {
                label: "React using Webpack",
                url: "2_with_webpack.html"
            }
        ]
    },
    {
        label: "Example",
        items: [
            {
                label: "UBaeZi Example",
                url: "3_ubaezi.html"
            }
        ]
    }
];

ReactDOM.render(
    <MenuList menu={menu}/>,
    document.getElementsByClassName("container")[0]
);