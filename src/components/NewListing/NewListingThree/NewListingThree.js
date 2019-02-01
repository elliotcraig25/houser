import React from 'react'
import axios from 'axios'
import '../newlisting.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class NewListingThree extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            recRent: '0',
            
        }
    }

    sendPropsToDB(){
        const {propertyName, address, city, state, zip, image, mmAmount, dmRent} = this.props
        axios.post(`/api/property`, {propertyName, address, city, state, zip, image, mmAmount, dmRent})
        .then(response=>{console.log(response)})
    }

    render(){
        return (
            <div className="new_listing">
                <div className="new_listing_content">
                    <div>
                        <div>Add New Listing</div>
                        <Link to="/"><button>Cancel</button></Link>
                        <p>please be here {this.props.propertyName}</p>
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
                        <button onClick={this.sendPropsToDB()}>complete</button>
                        <Link to="/"><button>Temp Next</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip, 
        image: state.image,
        mmAmount: state.mmAmount,
        dmRent: state.dmRent
    }
}

export default connect(mapStateToProps)(NewListingThree)