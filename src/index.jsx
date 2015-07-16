import * as React from 'react';

import {Timer} from 'timer/component.jsx';
import {Menu} from 'menu/component.js';

React.render(
    <Timer start={Date.now()} />,
    document.getElementById('timer')
);

React.render(
    <Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('menu')
);
