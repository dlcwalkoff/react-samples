import React from 'react';

import {BigTable} from 'components/BigTable.js';

let data = require('./data/fakeTableData.json');

React.render(
    <BigTable rows={data.columns}></BigTable>,
    document.getElementById('table')
);