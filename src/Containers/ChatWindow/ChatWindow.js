import skypeyStore from '../../store/skypeyStore'
import Header from '../../Components/skypey/Header/Header'
import Chats from '../../Components/skypey/Chats/Chats'
import MessageInput from '../MessageInput/MessageInput'

import './ChatWindow.css'

const ChatWindow = ({ activeUserId }) => {
  const state = skypeyStore.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMessages = state.messages[activeUserId];
  const convertedActiveMessages = Object.values(activeMessages)
  return (
    <div className="ChatWindow">
      <Header 
        user={activeUser}
      /> 
      <Chats 
        messages={convertedActiveMessages}
      />
      <MessageInput />  
    </div>
  )
}

export default ChatWindow;