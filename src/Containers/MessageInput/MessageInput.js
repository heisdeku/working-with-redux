import skypeyStore from '../../store/skypeyStore'
import { 
  setTypingValue,
  sendMessage
} from '../../actions/skypey-actions/index'
import './MessageInput.css'

const MessageInput = ({ value }) => {
  const state = skypeyStore.getState()
  const handleSubmit = e => {
    e.preventDefault()
    const { typing, activeUserId } = state;
    skypeyStore.dispatch(sendMessage(typing, activeUserId))
  }
  const handleChange = e => {    
    skypeyStore.dispatch(setTypingValue(e.target.value));
  }
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="Write a Message"
      />
    </form>
  )
}

export default MessageInput;