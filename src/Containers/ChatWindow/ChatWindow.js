import skypeyStore from '../../store/skypeyStore'
import Header from '../../Components/skypey/Header/Header'

const ChatWindow = ({ activeUserId }) => {
  const state = skypeyStore.getState()
  const activeUser = state.contacts[activeUserId]
  return (
    <div className="ChatWindow">
      <Header 
        user={activeUser}
      />      
    </div>
  )
}

export default ChatWindow;