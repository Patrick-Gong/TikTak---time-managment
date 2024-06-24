import { createContext, useState } from "react";

const UserIdContext = createContext({
  userId: '',
  checkUserId: () => {},
})

export function UserIdContextProvider({children}) {
  const [userId, setUserId] = useState(null);

  function checkUserId(id) {
    console.log('Updating to', id);
    setUserId(id);
  }

  const userIdCtx = {
    userId,
    checkUserId,
  }

  return (
    <UserIdContext.Provider value={userIdCtx}>
      {children}
    </UserIdContext.Provider>
  )
}

export default UserIdContext;