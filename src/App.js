import logo from './logo.svg';
import OneSignal from 'react-onesignal';

OneSignal.init({ appId: '50e71849-0777-4233-ae1b-611ba8505f4e' });
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>hello this is onsignal testing </h1>
    </div>
  );
}

export default App;
