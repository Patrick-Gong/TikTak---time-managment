import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserIdContext from './UserIdCtx';
import ToDoIdContext from './ToDoIdCtx';
import SelectedDateContext from './SelectedDateCtx';

const ToDoDataContext = createContext({
  toDoData: [],
  getData: () => {},
  addToDo: (text) => {},
  editToDo: (targetedId, editedContent) => {},
  deleteToDo: (targetedId) => {},
  completeToDo: (targetedId, updatedIsChecked) => {},
  reviewToDo: (targetedId, updatedEmoji) => {},
});

export function ToDoDataContextProvider({ children }) {
  const { userId } = useContext(UserIdContext);
  const { todoId, targetToDoId } = useContext(ToDoIdContext);
  const { selectedDate } = useContext(SelectedDateContext);
  const [todoData, setToDoData] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    getData();
  }, [selectedDate]);

  const getData = async () => {
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    try {
      const response = await axios.get(
        `${BASE_URL}/api/todos/${userId}?month=${month}&day=${day}`
      );
      setToDoData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addToDo = async (text) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/todos/${userId}`, {
        date: selectedDate,
        content: text,
      });
      if (response.status === 200) {
        alert(`${response.user}님 입력완료됐습니다.`);
        getData();
      }
    } catch (error) {
      alert('todo 입력에 실패했습니다.');
    }
  };

  const editToDo = async (targetedId, editedContent) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/todos/${userId}/${targetedId}`,
        { date: selectedDate, content: editedContent }
      );
      if (response.status === 200) {
        console.log(response.data);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToDo = async (targetedId) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/todos/${userId}/${targetedId}`
      );
      if (response.status === 200) {
        console.log(response.detail);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const completeToDo = async (targetedId, updatedIsChecked) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/todos/${userId}/${targetedId}/check`,
        { isChecked: updatedIsChecked }
      );
      if (response.status === 200) {
        console.log(response.detail);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reviewToDo = async (targetedId, updatedEmoji) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/todos/${userId}/${targetedId}/reviews`,
        { emoji: updatedEmoji }
      );
      if (response.status === 200) {
        console.log(response.detail);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const ctxValue = {
    todoData,
    getData,
    addToDo,
    editToDo,
    deleteToDo,
    completeToDo,
    reviewToDo
  };

  return (
    <ToDoDataContext.Provider value={ctxValue}>
      {children}
    </ToDoDataContext.Provider>
  );
}

export default ToDoDataContext;
