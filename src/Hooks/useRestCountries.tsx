//import { useState } from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestcountries } from '../redux/actions/restcountry'
import { AppState, Restcountry } from '../types'

//useRestCountries is custom hook
export default function useRestCountries(keyword: string): [Restcountry[]] {
  //console.log()

  const [filteredRestCountries, setFilteredRestCountries] = useState<
    Restcountry[]
  >([]) //this is filtered data for the searchbar
  const dispatch = useDispatch()
  const { allrestcountries } = useSelector(
    (state: AppState) => state.restcountry
  )
  //console.log(allrestcountries, "emiiii")

  useEffect(() => {
    dispatch(fetchRestcountries())
  }, [dispatch])
  //hook for searchbar
  useEffect(() => {
    let filteredData = allrestcountries.filter((restcountry) => {
      return (
        restcountry.name.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        restcountry.nativeName?.toLowerCase().search(keyword.toLowerCase()) !==
          -1 //this part if u also want to search country by nativeName
      //console.log(filteredData)
      )
    })
    setFilteredRestCountries(filteredData)
  }, [allrestcountries, keyword]) //because useEffect will know when u type a keyword and it will start searching

  //return [error, restcountries]; now we need the filteredRestCountries and not the restcountries because we do not need the entire data but the filtereddata that is being searched
  return [filteredRestCountries]
}
