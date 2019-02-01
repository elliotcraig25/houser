import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './components/Dashboard/Dashboard'

export default (
    <Switch>
        
        <Route exact path="/" component={DashBoard} />
    </Switch>
)