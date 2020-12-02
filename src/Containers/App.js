import skypeyStore from '../store/skypeyStore'
import Sidebar from '../Components/skypey/Sidebar/Sidebar';
import Main from '../Components/skypey/Main/Main';
import "./skypey.css";

const Skypey = () => {
  const { contacts }= skypeyStore.getState();
  const contactValues = Object.values(contacts)
  return (
    <div className="skypey-app">
      <Sidebar
        contacts={contactValues}
      />
      <Main />
    </div>
  )
}

export default Skypey;