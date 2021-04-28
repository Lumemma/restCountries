import { combineReducers } from 'redux'

import product from './product'
import restcountry from './restcountry'

const createRootReducer = () =>
  combineReducers({
    product,
    restcountry,
  })

export default createRootReducer
