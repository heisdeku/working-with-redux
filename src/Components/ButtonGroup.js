import React from 'react'
import { store } from '../store'
import { setTechnology } from '../actions'

const ButtonGroup = ({technologies}) => {
  function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    /**
     * store.dispatch() expects an action object
     */
    store.dispatch(setTechnology(tech));
  }
  return (
    <div className="button-group">
      {
        technologies.map((technology, idx) => 
        (
          <button
            data-tech={technology}
            key={`btn-${idx}`}
            className="hello-btn"
            onClick={dispatchBtnAction}
          >
            {technology}
          </button>
      ))}
    </div>
  )
}

export default ButtonGroup;