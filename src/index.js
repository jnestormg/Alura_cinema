import React, { useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rutas from './routes';
import { ContextProvider } from './Components/Context';
import Footer from './Components/Footer';
import Modal from './Components/Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>

    <ContextProvider>
      <Rutas />
    </ContextProvider>
    <Footer />
  </React.StrictMode>
);


