import { useContext } from 'react';

import './reset.css';
import GlobalStyles from './GlobalStyles';
import Login from './components/Landing/Login';
import SignUp from './components/Landing/SignUp';
import ToDoMain from './components/Main/ToDoMain';
import {UserIdContextProvider} from './components/store/UserIdContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <UserIdContextProvider>
        <GlobalStyles />
        <Outlet />
      </UserIdContextProvider>
    </>
  );
}

export default App;
