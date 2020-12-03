import React from 'react';
import ReactDOM from 'react-dom';
//import { store } from './store/bankStore'
import skypeyStore  from './store/skypeyStore'
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
  console.log(skypeyStore.getState())
}
const render = () => {
  fancyLog()
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()
skypeyStore.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
