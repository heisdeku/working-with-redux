import skypeyStore from '../../store/skypeyStore'
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import _ from "lodash"
import "./skypey.css";

const Skypey = () => {
  const { contacts }= skypeyStore.getState();
  return (
    <div className="skypey-app">
      <Sidebar
        contacts={contacts} 
      />
      <Main />
    </div>
  )
}

export default Skypey;