import { createStore } from 'redux'
import reducer from '../reducers/index'

const skypeyStore = createStore(reducer)

export default skypeyStore;