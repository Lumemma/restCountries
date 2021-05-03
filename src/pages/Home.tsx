import Button from '@material-ui/core/Button'
import React, { useContext, useState } from 'react'
//import { useSelector } from 'react-redux'
import MainTable from '../components/MainTable/maintable'
import SearchBar from '../components/SearchBar/searchbar'
import useRestCountries from '../Hooks/useRestCountries'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

export default function Home() {
  //this function and hook is for the Themes
  // Get the setter function from context
  const setThemeName = useContext(ThemeContext)
  console.log(setThemeName)

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
      <div className="App">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setThemeName('lightTheme')}
        >
          Set Light Theme
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName('darkTheme')}
        >
          Set Dark Theme
        </Button>
      </div>
      <SearchBar keyword={keyword} handleChange={handleChange} />
      <MainTable restcountries={restcountries} />
      <footer>All reserved rights</footer>
    </>
  )
}
