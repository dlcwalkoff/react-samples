import * as React from 'react';

import {Service} from './Service.js';

export class ServiceChooser extends React.Component {
    static propTypes = {
        items: React.PropTypes.arrayOf(React.PropTypes.object)
    }

    constructor() {
        super();

        this.state = {
            total: 0
        };
    }

    /**
     *
     * @param price {number}
     */
    addTotal = (price: number) => {
        this.setState({
            total: this.state.total + price
        });
    }

    renderServices = () => {
        return this.props.items.map((service: object) => {
            return <Service name={service.name} price={service.price} active={service.active} addTotal={this.addTotal} />;
        });
    }

    render() {
        return (
            <div>
                <h1>Our services</h1>

                <div id="services">
                    {this.renderServices()}
                    <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
                </div>
            </div>
        );
    }
}
