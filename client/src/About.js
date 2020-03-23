import React from 'react'


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myPic: "this is me",
            milliePic: "this is my dog"
        }


    }

    render() {
        return (
            <div>
                <div className='pictures'>
                    {this.state.myPic}
                </div>

                <div className='pictures'>
                    {this.state.milliePic}
                </div>

            </div>
        )
    }
}

export default About