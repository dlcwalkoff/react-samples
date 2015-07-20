import React from 'react';

import {map} from 'lodash';

export class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {
                    map(this.props.fields, (key:string, value:string) => {
                        return <td>{value}</td>;
                    })
                }
            </tr>
        );
    }
}

