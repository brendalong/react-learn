//need react component
import React from 'react';

class StorePicker extends React.Component {

    render() {
        // example without JSX
        // return React.createElement('p', {className: 'Test'}, 'You look marvelous today');
        
        //give return parens allowing for multiple lines
        //return only returns one element. May wrap in div
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store</button>
            </form>
        )
    }

}

// export the the component to be used other places
export default StorePicker;