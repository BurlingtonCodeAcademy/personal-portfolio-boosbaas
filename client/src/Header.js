import React from 'react'
import './App.css';
import About from './About'
import Curious from './Curious'
import HeaderButton from './headerButton';
import HeaderMenu from './HeaderMenu'

class Header extends React.Component {
   constructor(props)  {
      super(props)
        this.state = {
            name: 'I am so confused',
            visible:false
       }
       this.handleMouseDown=this.handleMouseDown.bind(this)
       this.toggleHeader = this.toggleHeader.bind(this)
    }
    handleMouseDown(event) {
        this.toggleHeader();
        console.log('clicked')
        event.stopPropagation();
    }
    toggleHeader() {
        this.setState({
            visible:!this.state.visible
        })
    }
    render() {
        return (
            <div>
                <HeaderButton handleMouseDown={this.handleMouseDown}>
                <h1>{this.state.name}</h1>
                </HeaderButton>
                <HeaderMenu handleMouseDown={this.handleMouseDown} headerVisibility={this.state.visible} />
                
            </div >
        )
    }
}

export default Header