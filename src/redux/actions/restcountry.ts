import { Dispatch } from 'redux'
import {
  ADD_RESTCOUNTRY,
  CountryActions,
  REMOVE_RESTCOUNTRY,
  Restcountry,
  REST_COUNTRY,
} from '../../types'

export function restCountries(country: Restcountry[]): CountryActions {
  return {
    type: REST_COUNTRY,
    payload: {
      country,
    },
  }
}
export function fetchRestcountries() {
  return async (dispatch: Dispatch) => {
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((resp) => resp.json())
      .then((restcountry) => {
        //console.log(restcountry)
        dispatch(restCountries(restcountry))
      })
  }
}

export function AddRestCountry(country: Restcountry): CountryActions {
  return {
    type: ADD_RESTCOUNTRY,
    payload: {
      country,
    },
  }
} // go dispatch this function in the tablerow with the button
// Then go to reducer and build a "case" called "ADDRESTCOUNTRY"

export function RemoveRestCountry(country: Restcountry): CountryActions {
  return {
    type: REMOVE_RESTCOUNTRY,
    payload: {
      country,
    },
  }
}
