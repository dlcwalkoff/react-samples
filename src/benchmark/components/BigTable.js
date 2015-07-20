import React from 'react';

import {TableRow} from './TableRow.js';

export class BigTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                    {
                        this.props.rows.map((row:object, index:number) => {
                            return <TableRow fields={row}></TableRow>
                        })
                    }
                </tbody>
            </table>
        );
    }
}
