import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveRestCountry } from '../../redux/actions/restcountry'
import { AppState } from '../../types'
import Flag from '../Flag/flag'
import Button from '@material-ui/core/Button'

//type cartProps= {
//    country: Restcountry

//}
export default function Cart() {
  const { incart } = useSelector((state: AppState) => state.restcountry)
  //const count = useSelector((state: AppState)=> state.restcountry.incart)
  console.log(incart)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        {incart.length === 0 ? (
          <div className="cart carthead">Empty Country</div>
        ) : (
          <div className="cart carthead">
            You have{incart.length} in Cart {''}
          </div>
        )}
      </div>
      <div>
        <div className="cart">
          <ul className="cart_item">
            {incart.map((country) => (
              <li key={country.name}>
                <div>
                  <Flag flagUrl={country.flag} />
                </div>
                <div>
                  <div>{country.name} </div>
                  <div>{country.region} </div>
                  <div>{country.population} </div>
                  <Button onClick={() => dispatch(RemoveRestCountry(country))}>
                    Remove{' '}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
