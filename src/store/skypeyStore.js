import { createStore } from 'redux'
import { skypeyReducer } from '../reducers/skypeyReducer'
import { contacts } from '../static-data'

const skypeyStore = createStore(skypeyReducer, { contacts })

export default skypeyStore;