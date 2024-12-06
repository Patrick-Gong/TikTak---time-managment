import { useContext } from 'react';

import './reset.css';
import GlobalStyles from './GlobalStyles';
import { UserIdContextProvider } from './components/store/UserIdCtx';
import { Outlet } from 'react-router-dom';
import { SelectedDateContextProvider } from './components/store/SelectedDateCtx';
import { ToDoIdContextProvider } from './components/store/ToDoIdCtx';
import { ToDoDataContextProvider } from './components/store/ToDoDataCtx';

function App() {
  return (
    <>
      <UserIdContextProvider>
        <SelectedDateContextProvider>
          <ToDoIdContextProvider>
            <ToDoDataContextProvider>
              <GlobalStyles />
              <Outlet />
            </ToDoDataContextProvider>
          </ToDoIdContextProvider>
        </SelectedDateContextProvider>
      </UserIdContextProvider>
    </>
  );
}

export default App;
