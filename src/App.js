import './App.css';
import HelloWorld from './Components/HelloWorld';
import ButtonGroup from './Components/ButtonGroup'
import UserCard from './Components/UserCard/UserCard'
import {store} from './store';
import BankApp from './Components/BankApp/Bank';
import Skypey from './Components/skypey/App';

function App() {  
  return (
    <div className="App">
     { /*
     <HelloWorld key={1} tech={store.getState().tech}/>
     <ButtonGroup key={2} technologies={['React', 'Elm', 'React-Redux']} />
      <UserCard />
      <BankApp />
      */
    }    
    <Skypey />
    </div>
  );
}

export default App;
