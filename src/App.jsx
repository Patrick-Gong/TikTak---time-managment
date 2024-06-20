import { useContext } from 'react';

import './reset.css';
import GlobalStyles from './GlobalStyles';
import Login from './components/Landing/Login';
import SignUp from './components/Landing/SignUp';
import ToDoMain from './components/Main/ToDoMain';
// import { UserProgressContextProvider } from './components/store/UserProgressContext';
import UserProgressContext from './components/store/UserProgressContext';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
