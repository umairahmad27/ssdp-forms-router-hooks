import { useEffect } from 'react';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";

import Routes from "./pages/Routes"
import CountContextProvider from './context/CountContext';
import AuthContextProvider from './context/AuthContext';

function App() {

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, [])

  return (
    <>
      <AuthContextProvider>
        <CountContextProvider>
          <Routes />
        </CountContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
