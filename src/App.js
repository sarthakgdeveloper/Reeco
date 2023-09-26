import { useState } from 'react';
import Header from './components/Header/Header';
import OrderPage from './components/OrderPage/OrderPage';
import MissingPopup from './components/MissingPopup/MissingPopup';


import './App.css';

function App() {
  const [openPopup, setOpenPopup] = useState(false)
  return (
    <div className="App">
      <Header />
      <OrderPage />
      {openPopup && <MissingPopup />}
    </div>
  );
}

export default App;
