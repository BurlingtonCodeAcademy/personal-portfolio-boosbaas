import React from 'react'

class Stuff extends React.Component {
    render() {
        return (
            <div className='stuff' >
                <div>
                <h2>Stuff*</h2>
                <p>a poem:</p>
                <ul className="poem">
                    <h1>Haiku Ambulance</h1>
                    <h2>by Richard Brautigan</h2>
                    <li>A piece of green pepper</li>
                    <li>fell</li>
                    <li>off the wooden salad bowl:</li>
                    <li>so what?</li>
                </ul>
                </div>
<div className='ps'>*while I learn how to write the code that gets the ideas out of my head</div>
            </div>
        )
    }
}
export default Stuff