import React from 'react';
import './headerButton.css';


class HeaderButton extends React.Component {
    render() {
        return (
            < button id='roundButton' onMouseDown={this.props.handleMouseDown}></ button>
        );
    }
}

export default HeaderButton
