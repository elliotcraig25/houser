import React from 'react'
import '../dashboard.css'
import {Link} from 'react-router-dom'

class DashHeader extends React.Component {
    render(){
        return (
            <div className="dash_header"> 
                <div>Dashboard</div>
                <Link to="/new_listing_one"><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default DashHeader