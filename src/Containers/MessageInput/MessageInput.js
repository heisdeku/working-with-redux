import skypeyStore from '../../store/skypeyStore'
import { setTypingValue } from '../../actions/skypey-actions/index'
import './MessageInput.css'

const MessageInput = ({ value }) => {
  const handleChange = e => {
    skypeyStore.dispatch(setTypingValue(e.target.value));
  }
  return (
    <form className="Message">
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