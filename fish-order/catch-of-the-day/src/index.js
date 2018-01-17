// let's go!
import React from 'react';
import { render } from 'react-dom';
//allows import of only specific methods

//demo 1
/*
class StorePicker extends React.Component {

    render() {
        return <p>Hello</p>
    }

}
*/
// render below refers to import above
// what to render and then where to render
/*
render(<StorePicker/>, document.getElementById('main'));
*/

// check out dev tools, see the component

//now move component to own file. and import into this one
// end demo 1

// demo 2
//use relative path (don't want to look in node_modules)
/*
import './css/style.css';
import StorePicker from './components/StorePicker';
import './components/StorePicker-css.css';

render(<StorePicker/>, document.getElementById('main'));
*/
//end demo 2

//demo 3
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import './components/StorePicker-css.css';


render(
    <App/>, document.getElementById('main')
);