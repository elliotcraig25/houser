import React from 'react'
import '../../newlisting.css'
import {updateListingOne} from '../../../../ducks/reducer'
import {connect} from 'react-redux'


class NewL1Form extends React.Component {
    constructor(){
        super()
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    handleChange(field, value) {
        this.setState({ [`${field}`] : value})
        this.props.updateListingOne(this.state)
        // console.log(this.state)
    }
    
    render(){
        return (
            <div className="form_parent">
                <div>
                    <p>Property Name</p>
                    <input value={this.state.propertyName} onChange={(e) => this.handleChange("propertyName", e.target.value)}type="text"/>
                </div>
                <div>
                    <p>Address</p>
                    <input value={this.state.address} onChange={(e) => this.handleChange("address", e.target.value)}type="text"/>
                </div>
                <div className="city_state_zip">
                    <div>
                        <p>City</p>
                        <input value={this.state.city} onChange={(e) => this.handleChange("city", e.target.value)}type="text"/>
                    </div>
                    <div>
                        <p>State</p>
                        <input value={this.state.state} onChange={(e) => this.handleChange("state", e.target.value)}type="text"/>
                    </div>
                    <div>
                        <p>Zip</p>
                        <input value={this.state.zip} onChange={(e) => this.handleChange("zip", e.target.value)}type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateListingOne
}

export default connect(null, mapDispatchToProps)(NewL1Form)