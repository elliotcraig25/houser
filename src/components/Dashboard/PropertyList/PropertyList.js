import React from 'react'
import '../dashboard.css'
import {connect} from 'react-redux'

const PropertyList = props => {
    

    return (
        <div>
            <div>
                Home Listings
            </div>
            <div>
                <p>property name: {props.propertyName}</p>
                <p>address: {props.address}</p>
                <p>city: {props.city}</p>
                <p>state: {props.state}</p>
                <p>zip: {props.zip}</p>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps)(PropertyList)