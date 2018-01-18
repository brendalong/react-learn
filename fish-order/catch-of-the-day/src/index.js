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
/*
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import './components/StorePicker-css.css';


render(
    <App/>, document.getElementById('main')
);
// end demo 3
*/

//demo 4 with router

//add router for pages
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import './components/StorePicker-css.css';
import NotFound from './components/NotFound';

const Root = () =>{
    return(
        <BrowserRouter>
        <div>
            {/* having more than one, need to wrap in div */}
            {/* use Match and Miss from imprt*/}
            {/* matches can be put anywhere is app (many levels deep even)} */}
            {/* Test this with forward slash in url and then with /store/123 */ }
            <Match exactly pattern="/" component={StorePicker} />
            <Match pattern="/store/:storeId" component={App} />
            {/* number, boolean, etc must be in {}, strings in quotes */}
            <Miss component={NotFound} />
        </div>
        </BrowserRouter>
    )
}

render(
    <Root/>, document.getElementById('main')
);