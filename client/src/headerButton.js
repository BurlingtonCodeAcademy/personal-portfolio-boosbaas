import React from 'react';
import './headerButton.css';


class HeaderButton extends React.Component {
    render() {
        return (
            < button id='roundButton' onClick={this.props.handleMenuChange}></ button>
        );
    }
}

export default HeaderButton
