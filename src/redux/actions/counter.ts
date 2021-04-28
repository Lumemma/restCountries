import { AddCounterAction, ADD_INCREMENT } from '../../types'

export function AddCounter(): AddCounterAction {
  return {
    type: ADD_INCREMENT,
  }
}
