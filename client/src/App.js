import './App.css';
import { Header } from './messanger/Header';
import Login from './messanger/login';
import Messanger from './messanger/Messanger';


function App() {
  return (
    <div className="App">
      <Login />
      <Header />
    </div>
  );
}

export default App;
