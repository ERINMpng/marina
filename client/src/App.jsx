import './App.css';

import NavBar from './compon/NavBar';
import ShopPage from './compon/ShopPage';
import CartItem from './compon/CartItem';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './compon/AppRouter';

function App() {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
