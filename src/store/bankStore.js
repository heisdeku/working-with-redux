import { createStore } from 'redux';
import { bankReducer } from '../reducers/bankReducer'

const initialState = {
    username: 'Janny',
    totalAmount: 2500701
}
export const store = createStore(bankReducer, initialState);