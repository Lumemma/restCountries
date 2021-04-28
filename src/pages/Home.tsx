import React, { useState } from 'react'
//import { useSelector } from 'react-redux'
import MainTable from '../components/MainTable/maintable'
import SearchBar from '../components/SearchBar/searchbar'
import useRestCountries from '../Hooks/useRestCountries'

export default function Home() {
  //const [cartOpen, setCartOpen] = useState(false);
  const [keyword, setKeyword] = useState('')
  const [restcountries] = useRestCountries(keyword)
  //console.log(restcountries, "how")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value);
    setKeyword(event.target.value)
    //console.log(event.target.value);
  }

  return (
    <>
      <SearchBar keyword={keyword} handleChange={handleChange} />

      <MainTable restcountries={restcountries} />
      <footer>All reserved rights</footer>
    </>
  )
}
