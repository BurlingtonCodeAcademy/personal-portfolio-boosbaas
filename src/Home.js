import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <h2>HELLO</h2>
                <p className="square">A work in progress</p>
                <a src="https://imgur.com/McDZ7jy"><img className="pia" id="first" src="https://i.imgur.com/McDZ7jy.png" title="source: imgur.com" /></a>
                <a src="https://imgur.com/b7I7WQe"><img className="pia" id="second" src="https://i.imgur.com/b7I7WQe.png" title="source: imgur.com" /></a>
                <a src="https://imgur.com/bl9ZSVZ"><img className="pia" id="third" src="https://i.imgur.com/bl9ZSVZ.png" title="source: imgur.com" /></a>
            </div>
        )
    }
}
export default Home