import React from 'react'
import '../dashboard.css'


class DashHeader extends React.Component {
    render(){
        return (
            <div className="dash_header"> 
                <div>Dashboard</div>
                <button>Add New Property</button>
            </div>
        )
    }
}

export default DashHeader