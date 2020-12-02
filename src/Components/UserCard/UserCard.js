import React from 'react';
import { store } from '../../store/userCardStore'
import User from '../../images/user.png'
import './userCard.css';

const UserCard = () => {
  const value = store.getState()
  const { name, description, likes, location} = value;
  return (
    <div className="Card">
        <section className="User__img">
          <img src={User} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
  )
}
export default UserCard;
