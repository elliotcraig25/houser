import React from 'react'
import '../dashboard.css'
import axios from 'axios';

import ListItems from './ListItems/ListItems'


class PropertyList extends React.Component {
    constructor(){
        super()
        this.state = {
            homeInfo: [],
            iNeedToSetState: 0
        }
        this.boundTo = this.boundTo.bind(this)
        this.deleteTheItem = this.deleteTheItem.bind(this)
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

    boundTo(fallingInLove){
        return (
            <div>
                {fallingInLove}
            </div>
        )
    }

    deleteTheItem(abc){
        return ()=>{
            console.log('the id', abc)
            axios.delete(`/api/deleteproperty`, {id: abc})
            .then(
                
                // (response)=>{console.log(response)}
            )
        }
    }

    render(){
        const homeListings = this.state.homeInfo.map((item)=>{
            return (
                <div key={item.property_id}>
                    <ListItems propertyId={item.property_id} propertyName={item.property_name} address={item.address} city={item.city} state={item.state} zip={item.zip} boundTo={this.boundTo} deleteTheItem={this.deleteTheItem}/>
                </div>
                
            )
        })
        return (
            <div>
                <div>
                    Home Listings
                </div><br/>
                <div className="prop_list_parent">
                    {homeListings}
                </div>
            </div>
        )
    }
}

export default PropertyList