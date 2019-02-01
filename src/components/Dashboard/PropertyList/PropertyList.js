import React from 'react'
import '../dashboard.css'
import {connect} from 'react-redux'

const PropertyList = props => {
    
    const homeListings = props.state.map(item=>{
        return (
            <div>
                {item}
            </div>
        )
    })
    

    return (
        <div>
            <div>
                Home Listings
            </div>
            <div>
                {homeListings}
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