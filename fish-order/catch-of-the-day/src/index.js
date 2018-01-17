// let's go!
import React from 'react';
import { render } from 'react-dom';
//allows import of only specific methods

class StorePicker extends React.Component {

    render() {
        return <p>Hello</p>
    }

}

// render below refers to import above
// what to render and then where to render
render(<StorePicker/>, document.getElementById('main'));