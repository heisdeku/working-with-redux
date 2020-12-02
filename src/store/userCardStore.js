import { createStore } from 'redux';
import { userCardReducer } from '../reducers/userCardReducer';

const initialState = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
}
export const store = createStore(userCardReducer, initialState);