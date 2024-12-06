import { createContext, useState } from 'react';

const ToDoIdContext = createContext({
  todoId: '',
  targetToDoId: () => {},
});

export function ToDoIdContextProvider({ children }) {
  const [todoId, setToDoId] = useState(null);

  function targetToDoId(id) {
    console.log('Updating to', id);
    setToDoId(id);
  }

  const ctxValue = {
    todoId,
    targetToDoId,
  };

  return (
    <ToDoIdContext.Provider value={ctxValue}>{children}</ToDoIdContext.Provider>
  );
}

export default ToDoIdContext;
