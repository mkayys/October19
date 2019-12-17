import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selectedIdx: 0
        }
    }

    handleClick(e) {
        let newIdx = e.currentTarget.getAttribute('data-idx');
        this.setState({
            selectedIdx: newIdx
        })
    }

    render() {
        const tabs = this.props.tabsArr.map((tab, idx) => {
            return (
                <li onClick={this.handleClick} key={idx} data-idx={idx}>
                    <h1>{tab.title}</h1>
                </li>
            )
        })
        return (
            <ul>
                {tabs}
                {this.props.tabsArr[this.state.selectedIdx].content}
            </ul>
        )
    }
}

export default Tabs;