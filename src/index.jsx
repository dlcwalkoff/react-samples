import * as React from 'react';

import {Timer} from 'timer/component.jsx';
import {Menu} from 'menu/component.js';
import {RealTimeSearch} from 'realTimeSearch/component.js';

let libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'}
];

React.render(
    <Timer start={Date.now()} />,
    document.getElementById('timer')
);

React.render(
    <Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('menu')
);

React.render(
    <RealTimeSearch items={libraries}></RealTimeSearch>,
    document.getElementById('realTimeSearch')
);
