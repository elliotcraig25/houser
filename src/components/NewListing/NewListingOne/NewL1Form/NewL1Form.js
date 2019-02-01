import React from 'react'
import '../../newlisting.css'


class NewL1Form extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    
    render(){
        return (
            <div className="form_parent">
                <div>
                    <p>Property Name</p>
                    <input />
                </div>
                <div>
                    <p>Address</p>
                    <input />
                </div>
                <div className="city_state_zip">
                    <div>
                        <p>City</p>
                        <input />
                    </div>
                    <div>
                        <p>State</p>
                        <input />
                    </div>
                    <div>
                        <p>Zip</p>
                        <input />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewL1Form