import { combineReducers } from 'redux'

import user from './skypey-reducers/user'
import contacts from './skypey-reducers/contacts'
import activeUserId from './skypey-reducers/activeUserId'

export default combineReducers({
  user,
  contacts,
  activeUserId
});