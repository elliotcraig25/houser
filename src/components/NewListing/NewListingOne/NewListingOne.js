import React from 'react'
import '../newlisting.css'

import NewL1Header from './NewL1Header/NewL1Header'
import NewL1Form from './NewL1Form/NewL1Form'
import NewL1Complete from './NewL1Complete/NewL1Complete'

class NewListingOne extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className="new_listing">
                <div className="new_listing_content">
                    <NewL1Header />
                    <NewL1Form />
                    <NewL1Complete />
                </div>
            </div>
        )
    }
}

export default NewListingOne