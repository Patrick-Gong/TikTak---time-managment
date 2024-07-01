import { useContext } from 'react';

import './reset.css';
import GlobalStyles from './GlobalStyles';
import { UserIdContextProvider } from './components/store/UserIdCtx';
import { Outlet } from 'react-router-dom';
import { SelectedDateContextProvider } from './components/store/SelectedDateCtx';

function App() {
  return (
    <>
      <UserIdContextProvider>
        <SelectedDateContextProvider>
          <GlobalStyles />
          <Outlet />
        </SelectedDateContextProvider>
      </UserIdContextProvider>
    </>
  );
}

export default App;
