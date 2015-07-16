import * as React from 'react';

import {Timer} from 'timer/component.jsx';

React.render(
    <Timer start={Date.now()} />,
    document.getElementById('timer')
);
