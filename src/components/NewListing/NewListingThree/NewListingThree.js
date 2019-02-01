import React from 'react'
import '../newlisting.css'
import {Link} from 'react-router-dom'

class NewListingThree extends React.Component {
    constructor(){
        super()
        this.state = {
            recRent: '0',
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
                            Recomended Rent: {this.state.recRent}
                        </div>
                        <div>
                            <div>
                                Monthly Morgage Amount
                            </div>
                            <input />
                        </div>
                        <div>
                            <div>
                                Disired Monthly Rent
                            </div>
                            <input />
                        </div>
                    </div>
                    <div>
                        <Link to="/new_listing_two"><button>Previous Step</button></Link>
                        <Link to="/"><button>Complete</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewListingThree