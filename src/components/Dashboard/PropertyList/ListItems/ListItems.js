import React from 'react'
import '../../dashboard.css'

const ListItems = props =>{
    const {boundTo} = props
    const {deleteTheItem} = props
    
    return (
        <div className="list_item">
            <div>
                <div>
                    the image would go here
                </div>
            </div>
            <div>
                {boundTo(`here's an item:`)}
                <div>
                    property name: {props.propertyName}
                </div>
                <div>
                    property address: {props.address}
                </div>
                <div>
                    property city: {props.city}
                </div>
                <div>
                    property state: {props.state}
                </div>
                <div>
                property zip: {props.zip}
                </div>
            </div>
            <div>
                <div>
                    mortgage would go here
                </div>
                <div>
                    rent would go here
                </div>
            </div>
            <div>
                <button onClick={deleteTheItem(props.propertyId)}>X</button>
            </div>
        </div>
    )
}

export default  ListItems