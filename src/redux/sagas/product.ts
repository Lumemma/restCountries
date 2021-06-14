import { takeLatest } from 'redux-saga/effects'

import { ADD_PRODUCT, AddProductAction } from '../../types'

function* doSomethingWhenAddingProduct(action: AddProductAction) {
  yield console.log(action)
}

const addProductSaga = [takeLatest(ADD_PRODUCT, doSomethingWhenAddingProduct)]

export default addProductSaga
