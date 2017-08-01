

import getInputValue from './getInputValue'
import store from '../commons/store'
// import configureStore from 'redux-mock-store'

it('getInputValue test', () => {
  // const middlewares = []
  // const mockStore = configureStore(middlewares)
  // const initialState ={}
  // const store = mockStore(initialState)


  let e = {}
  e.target = {}
  e.currentTarget = {}
  e.target.value = '1230'
  e.currentTarget.dataset = {}
  e.currentTarget.dataset.path = 'MACHINE'
  e.currentTarget.dataset.id = 'number'
  getInputValue(e)
  // expect(store.getActions()).toBe(number)
  expect(store.getState().machine.number).toEqual('1230')

  e.currentTarget.dataset.id = 'abstract'
  e.target.value = '这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话这是一段话'
  getInputValue(e)
  expect(store.getState().machine.abstract.length).toEqual(60)
})
