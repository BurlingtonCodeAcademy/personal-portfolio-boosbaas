import React from 'react';
import './HeaderMenu.css'
import './App.css'


class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            whoohoo: "but look, at least the page is blue"
        }
    }
    render() {
        let visibility = 'hide';
        if (this.props.headerVisibility) {
            visibility = 'show';
            
        }
        return (
            <div id='flyoutMenu'  onClick={this.props.handleMenuChange} className={visibility}>
                <h3 id='snark' className='mainDivision'>{this.state.whoohoo}</h3>
            </div>
        )
    }
}
export default HeaderMenu