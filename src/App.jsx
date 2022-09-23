import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom'
import CartContext from './Context/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter className="App">
        <Header />
        <Main />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;

