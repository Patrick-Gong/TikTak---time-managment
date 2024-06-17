import './reset.css';
import GlobalStyles from '../GlobalStyles';
import Login from './components/Landing/Login';
import SignUp from './components/Landing/SignUp';
import ToDoMain from './components/Main/ToDoMain';
import { useState } from 'react';

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);

  function handleLogin() {
    setIsEntered(true);
  }

  function handleSignUp() {
    setToSignUp(true);
  }

  return (
    <>
      <GlobalStyles />
      {!isEntered && <Login onEnter={handleLogin} onSignUp={handleSignUp} />}
      {toSignUp && !isEntered && <SignUp />}
      {isEntered && <ToDoMain />}
    </>
  );
}

export default App;
