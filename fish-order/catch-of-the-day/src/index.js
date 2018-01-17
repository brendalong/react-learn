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

//use relative path (don't want to look in node_modules)
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.getElementById('main'));