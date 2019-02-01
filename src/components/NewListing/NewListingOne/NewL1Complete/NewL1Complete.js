import React from 'react'
import '../../newlisting.css'
import {Link} from 'react-router-dom'

const NewL1Complete = ()=>{
    return (
        <div>
            <Link to="/new_listing_two">
                <button>Next Step</button>
            </Link>
        </div>
    )
}

export default NewL1Complete