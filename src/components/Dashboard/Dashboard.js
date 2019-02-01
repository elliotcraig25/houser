import React, {Component} from 'react'
import './dashboard.css'

import DashHeader from './DashHeader/DashHeader'

class Dashboard extends Component {

    render(){
        return (
            <div className="main_dash">
                <div className="dash_content">
                    <DashHeader />
                </div>
            </div>
        )
    }
}

export default Dashboard