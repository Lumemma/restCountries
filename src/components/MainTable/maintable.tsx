import Table from '@material-ui/core/Table'

import React from 'react'
//import Table from 'react-bootstrap/Table'
import { Restcountry } from '../../types'

import TableHeader from '../TableHeader/tableheader'
import TableRow from '../TableRow/tablerow'
//import './maintable.css'

type mainTableProps = {
  restcountries: Restcountry[]
}
// in oder to get the data here we restructure the prop in the mainTable, which is the "restcountries" and console.log to be sure.
//the best approach to pass data to the tablerow is to map through restcountries and get access to the data we need for each restcountry.
export default function MainTable({ restcountries }: mainTableProps) {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {restcountries.map((restcountry) => (
          <TableRow key={restcountry.name} restcountry={restcountry} />
        ))}
      </tbody>
    </Table>
  )
}
