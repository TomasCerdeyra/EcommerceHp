
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Main />
      
    </BrowserRouter>
  );
}

export default App;

