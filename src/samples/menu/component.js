import * as React from 'react';

export class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            focused: 0
        };

        //bind
        this.clicked = this.clicked.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    clicked(index: number) {
        this.setState({
            focused: index
        });
    }

    renderList() {
        return this.props.items.map((val, index) => {
            let style = '';

            if(this.state.focused == index) style = 'focused';

            return <li className={style} onClick={this.clicked.bind(this, index)}>{val}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul>{this.renderList()}</ul>
                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
}
