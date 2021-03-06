import skypeyStore from '../store/skypeyStore'
import {setActiveUserId} from '../actions/skypey-actions'

import './User.css'

const User = ({ user }) => {
  const { name, profile_pic, status} = user;
  function handleUserClick({ user_id}) {
    console.log(user_id)
    skypeyStore.dispatch(setActiveUserId(user_id))
  }
  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  )

}

export default User;