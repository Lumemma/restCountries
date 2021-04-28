// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_INCREMENT = 'ADD_INCREMENT'
export const REST_COUNTRY = 'REST_COUNTRY'
export const ADD_RESTCOUNTRY = 'ADD_RESTCOUNTRY'
export const REMOVE_RESTCOUNTRY = 'REMOVE_RESTCOUNTRY'

//For restCountries data
type Languages = {
  name: string
}

export type Restcountry = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
  nativeName?: string
}

export type RestCountryAction = {
  type: typeof REST_COUNTRY
  payload: {
    country: Restcountry[]
    //array because we are getting all the countries
  }
}

export type AddRestCountryAction = {
  type: typeof ADD_RESTCOUNTRY
  payload: {
    country: Restcountry
    //no array because it targets just one country
  }
}

export type RemoveRestCountryAction = {
  type: typeof REMOVE_RESTCOUNTRY
  payload: {
    country: Restcountry
  }
}

export type counterState = {
  count: number
}

export type AddCounterAction = {
  type: typeof ADD_INCREMENT
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountryActions =
  | RestCountryAction
  | AddRestCountryAction
  | RemoveRestCountryAction

export type ProductState = {
  inCart: Product[]
}
//state type for the country

export type RestCountryState = {
  allrestcountries: Restcountry[]
  incart: Restcountry[]
}

export type AppState = {
  product: ProductState
  counter: counterState
  restcountry: RestCountryState
}
