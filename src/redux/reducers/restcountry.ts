import {
  ADD_RESTCOUNTRY,
  CountryActions,
  REMOVE_RESTCOUNTRY,
  RestCountryState,
  REST_COUNTRY,
} from '../../types'

export default function restcountry(
  state: RestCountryState = { allrestcountries: [], incart: [] },
  action: CountryActions
): RestCountryState {
  switch (action.type) {
  case REST_COUNTRY: {
    return { ...state, allrestcountries: action.payload.country }
  }

  case ADD_RESTCOUNTRY: {
    const { country } = action.payload
    //console.log(country)
    if (state.incart.find((r_country) => r_country.name === country.name)) {
      return state
    }
    return { ...state, incart: [...state.incart, country] }
  }

  case REMOVE_RESTCOUNTRY: {
    const { country } = action.payload
    const index = state.incart.findIndex(
      (r_country) => r_country.name === country.name
    )
    if (index >= 0) {
      state.incart.splice(index, 1)
      return { ...state, incart: [...state.incart] }
    }
    return state
  }

  default:
    return state
  }
}
