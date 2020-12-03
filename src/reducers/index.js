import { combineReducers } from 'redux'

import user from './skypey-reducers/user'
import contacts from './skypey-reducers/contacts'
import activeUserId from './skypey-reducers/activeUserId'
import messages from './skypey-reducers/messagesReducer'
import typing from './skypey-reducers/typingReducer'

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserId,
  typing
});