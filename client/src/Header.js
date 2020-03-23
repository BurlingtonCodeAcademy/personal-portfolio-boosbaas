import React from 'react'
import './App.css';
import './index.css';
import HeaderButton from './headerButton';
import HeaderMenu from './HeaderMenu'

class Header extends React.Component {
   constructor(props)  {
      super(props)
        this.state = {
            name: 'I am so confused right now.',
            visible: false,
            
       }
       this.handleMenuChange=this.handleMenuChange.bind(this)
       this.toggleHeader = this.toggleHeader.bind(this)
    }
    handleMenuChange(event) {
        this.toggleHeader();
       console.log('clicked')
        event.stopPropagation();
    }
    toggleHeader() {
        console.log(this.state.visible)
        this.setState({
            visible:!this.state.visible
        })
    }
    render() {
        return (
            <div className='mainDivision'>
                <h2 id='confusion'>{this.state.name}</h2>
                <HeaderButton handleMenuChange={this.handleMenuChange}>   </HeaderButton>
                <HeaderMenu handleMenuChange={this.handleMenuChange} headerVisibility={this.state.visible}></HeaderMenu> 
            </div >
        )
    }
}

export default Header