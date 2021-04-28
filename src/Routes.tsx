import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RestCountryDetails from './pages/countryDetails'

import Home from './pages/Home'
//import Product from './pages/Product'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/*<Route exact path="/products/:id" component={Product} />*/}
    <Route exact path="/countryDetails/:name" component={RestCountryDetails} />
  </Switch>
)

export default Routes
