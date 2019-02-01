import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './components/Dashboard/Dashboard'
import NewListingOne from './components/NewListing/NewListingOne/NewListingOne'

export default (
    <Switch>
        <Route path="/new_listing_one" component={NewListingOne} />
        <Route exact path="/" component={DashBoard} />
    </Switch>
)