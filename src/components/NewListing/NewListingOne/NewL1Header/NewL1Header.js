import React from 'react'
import '../../newlisting.css'
import {Link} from 'react-router-dom'

const NewL1Header = ()=>{
    return (
        <div>
            <div>Add New Listing</div>
            <Link to="/"><button>Cancel</button></Link>
            
        </div>
    )
}

export default NewL1Header