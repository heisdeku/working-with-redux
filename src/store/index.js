import { createStore } from 'redux'
import reducer from '../reducers/index-1'

const initialState = { tech: "React" }
export const store = createStore(reducer, initialState)