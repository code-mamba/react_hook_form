import logo from './logo.svg';
import './App.css';
import RegisteForm from './components/registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
      <RegisteForm></RegisteForm>
      </header>
    </div>
  );
}

export default App;
