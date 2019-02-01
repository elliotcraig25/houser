import React from 'react'
import '../newlisting.css'
import {Link} from 'react-router-dom'

class NewListingTwo extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div className="new_listing">
                <div className="new_listing_content">
                    <div>
                        <div>Add New Listing</div>
                        <Link to="/"><button>Cancel</button></Link>
                    </div>
                    <div>
                        <div>
                            Image URL
                        </div>
                        <input />
                    </div>
                    <div>
                        <Link to="/new_listing_one"><button>Previous Step</button></Link>
                        <Link to="/"><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewListingTwo