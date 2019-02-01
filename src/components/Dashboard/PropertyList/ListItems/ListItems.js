import React from 'react'

const ListItems = props =>{
    return (
        <div>
            <p>property name: {props.propertyName}</p><br/>
            <p>property address: {props.address}</p><br/>
            <p>property city: {props.city}</p><br/>
            <p>property state: {props.state}</p><br/>
            <p>property zip: {props.zip}</p><br/>
        </div>
    )
}

export default  ListItems