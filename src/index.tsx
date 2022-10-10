//import ReactDOM from 'react-dom';
import App from './components/App';

//ReactDOM.render(<App />, document.querySelector('#root'));

import ReactDOM from "react-dom/client";
//import UserSearch from './state/UserSearch'
//import EventComponent from './events/EventComponent'


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);


root.render(<App />)