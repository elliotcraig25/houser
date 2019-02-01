import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './components/Dashboard/Dashboard'
import NewListingOne from './components/NewListing/NewListingOne/NewListingOne'
import NewListingTwo from './components/NewListing/NewListingTwo/NewListingTwo'
import NewListingThree from './components/NewListing/NewListingThree/NewListingThree'

export default (
    <Switch>
        <Route path="/new_listing_three" component={NewListingThree} />
        <Route path="/new_listing_two" component={NewListingTwo} />
        <Route path="/new_listing_one" component={NewListingOne} />
        <Route exact path="/" component={DashBoard} />
    </Switch>
)