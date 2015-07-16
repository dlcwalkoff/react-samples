import * as React from 'react';

export class RealTimeSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            searchString: ''
        }
    }

    /**
     * @param e {object} event-object
     */
    handleChange(e: object) {
        let newValue = e.target.value;

        //TODO: не обновляется стейт? -> Не меняется значение в связанном инпуте
        this.setState({
            searchString: newValue
        })
    }

    render() {
        let libraries = this.props.items;
        let searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0) {
            libraries = libraries.filter((lib: object) => lib.name.toLowerCase().match(searchString));
        }

        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

                <ul>
                    {
                        libraries.map((lib) => {
                            return <li>{lib.name} <a href={lib.url}>{lib.url}</a></li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}
