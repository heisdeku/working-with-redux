import { getMessages } from '../../static-data'
import { SEND_MESSAGE } from '../../actions/constants/action-types'

export default function messages(state = getMessages(), action) {
  switch(action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMessages = state[userId];      
      const number = Number(Object.keys(allUserMessages).pop()) + 1      

      return {
        ...state,
        [userId]: {
          ...allUserMessages,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          }
        }
      }
    default:
      return state
  }
}