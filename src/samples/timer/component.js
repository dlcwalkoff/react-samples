import * as React from 'react';

export class Timer extends React.Component {
    static propTypes = {
        start: React.PropTypes.number
    }

    constructor() {
        super();

        this.state = {
            elapsed: 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        let newTime = new Date() - this.props.start;

        this.setState({
            elapsed: newTime
        });
    }

    render() {
        let elapsed = Math.round(this.state.elapsed / 100);
        let seconds = (elapsed / 10).toFixed(1);

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
}
