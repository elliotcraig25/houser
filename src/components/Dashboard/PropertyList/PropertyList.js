import React from 'react'
import '../dashboard.css'
import axios from 'axios';

import ListItems from './ListItems/ListItems'


class PropertyList extends React.Component {
    constructor(){
        super()
        this.state = {
            homeInfo: []
        }
    }
    
    componentDidMount(){
        axios.get(`/api/getproperty`)
        .then(response=>{
            this.setState({
                homeInfo: response.data
            })
            console.log(this.state)
        })
        
    }

    render(){
        const homeListings = this.state.homeInfo.map((item)=>{
            return (
                <div key={item.property_id}>
                    <ListItems propertyName={item.property_name} address={item.address} city={item.city} state={item.state} zip={item.zip}/>
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
}

export default PropertyList