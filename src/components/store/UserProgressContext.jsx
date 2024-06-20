import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: '',
  showMain: () => {},
  hideMain: () => {},
  showSignUp: () => {},
  hideSignUp: () => {},
})

export function UserProgressContextProvider({children}) {
  const [userProgress, setUserProgress] = useState('');

  function showMain() {
    setUserProgress('main');
  }

  function hideMain() {
    setUserProgress('');
  }

  function showSignUp() {
    setUserProgress('signUp');
  }

  function hideSignUp() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showMain,
    hideMain,
    showSignUp,
    hideSignUp,
  }

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  )
}

export default UserProgressContext;