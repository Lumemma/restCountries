import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddRestCountry } from '../../redux/actions/restcountry'
import { Restcountry } from '../../types'
import Flag from '../Flag/flag'
//import './tr.css'
import Button from '@material-ui/core/Button'

type TableRowProps = {
  restcountry: Restcountry
}

export default function TableRow({ restcountry }: TableRowProps) {
  const dispatch = useDispatch()
  return (
    <tr>
      <td>
        <Flag flagUrl={restcountry.flag} />
      </td>
      <Link to={`/countryDetails/${restcountry.name}`}>{restcountry.name}</Link>

      <td>{restcountry.population}</td>
      <td>
        {restcountry.languages.map((languages) => (
          <li key={languages.name}>{languages.name}</li>
        ))}
      </td>
      <td>{restcountry.region}</td>

      <td>
        <Button onClick={() => dispatch(AddRestCountry(restcountry))}>
          Add{' '}
        </Button>
      </td>
    </tr>
  )
}

//map through languages because it is an array of objects
