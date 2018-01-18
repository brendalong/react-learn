import React from 'react';

//version 1 - as component
/*
class Header extends React.Component {
    
    render() {
        console.log("what is this", this);

        return (
           <header className="top">
            <h1>Catch of the Day</h1>
            <h3 className="tagline"><span>{this.props.tagline}</span></h3>
           </header>
        )
    }
}
*/
//version 2 - make stateless component
//pass props in directly
//no need for this - not a component


const Header = (props) =>{
    return (
        <header className="top">
         <h1>Catch of the Day</h1>
         <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
     )
}



export default Header;