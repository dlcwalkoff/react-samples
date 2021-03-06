import React from 'react';

export class Service extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        price: React.PropTypes.number,
        addTotal: React.PropTypes.func
    }

    constructor() {
        super();

        this.state = {
            active: false
        };
    }

    clickHandler = () => {
        let active = !this.state.active;

        this.setState({active});

        this.props.addTotal( active ? this.props.price : -this.props.price );
    }

    render() {
        return (
            <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                {this.props.name} <b>${this.props.price.toFixed(2)}</b>
            </p>
        );
    }
}