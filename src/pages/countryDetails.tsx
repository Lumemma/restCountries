import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../types'

import React from 'react'
import Flag from '../components/Flag/flag'
import { fetchRestcountries } from '../redux/actions/restcountry'

type ParamTypes = {
  name: string
}

export default function RestCountryDetails() {
  //const [ setCountryData] = useState([]);

  const { name } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  const { allrestcountries } = useSelector(
    (state: AppState) => state.restcountry
  )
  //let url = `https://restcountries.eu/rest/v2/name/${name}`

  useEffect(() => {
    dispatch(fetchRestcountries())
  }, [dispatch])
  //console.log (allrestcountries, "REb")
  return (
    <div>
      {allrestcountries
        .filter((country) => country.name === name)
        .map((countryData) => {
          return (
            <ul key={countryData.name}>
              ()
              <li>{countryData.name}</li>
              <li>{countryData.population}</li>
              <li>{countryData.region}</li>
              <Flag flagUrl={countryData.flag} />
            </ul>
          )
        })}
    </div>
  )
}
