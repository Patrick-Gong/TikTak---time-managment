import styled from 'styled-components';
import ToDoForm from '../Main/ToDoForm';
import ToDoList from '../Main/ToDoList';
import Calendar from './Calendar';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import UserIdContext from '../store/UserIdCtx';
import SelectedDateContext from '../store/SelectedDateCtx';

function ToDoMain() {
  const { userId } = useContext(UserIdContext);
  const { selectedDate } = useContext(SelectedDateContext);
  const [toDoData, setToDoData] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // 선택된 날짜에 해당되는 객체의 id를 담는 state값 필요
  // const [selectedToDoId, setSelectedToDoId] = useState(null);

  console.log(selectedDate);


  // data에 값이 추가되거나 변경되면 다시 그 값들을 조회해야함
  // but, useEffect에 toDoData를 의존성으로 사용하면 무한 렌더링 발생
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

  return (
    <StyledMain>
      <div className="main-container">
        <div className="main-container_header">
          <div className="calendar-box">
            <Calendar />
          </div>
          <div className="todoForm-box">
            <ToDoForm />
          </div>
        </div>
        <div className="main-container_body">
          <span className="seam"></span>
          <span className="seam"></span>
        </div>
        <div className="main-container_footer">
          <div className="todoList-box">
            <div className="todoList-box-line" />
            <ToDoList data={toDoData} />
          </div>
        </div>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background: #e7efc5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .main-container {
    background-color: #bfd7b5;
    border: 2px solid black;
    width: 81.2rem;
    height: 41rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .main-container_header {
    width: 61.85rem;
    height: 17.2rem;
    display: flex;
  }

  & .calendar-box {
    width: 24.85rem;
    height: 100%;
    flex-shrink: 0;
    background-color: #f2dda4;
    border: 2px solid black;
    border-radius: 3.13rem;
  }

  & .todoForm-box {
    width: calc(100% - 24.85rem);
    height: 100%;
    background-color: #f2dda4;
    border: 2px solid black;
    border-radius: 3.13rem;
  }

  & .main-container_body {
    width: 61.85rem;
    height: 2.86rem;
    display: flex;
    padding-left: 11.56rem;
    padding-right: 17.69rem;
    justify-content: space-between;
  }

  & .seam {
    width: 1.6875rem;
    height: 2.875rem;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    background: #f2dda4;
  }

  & .main-container_footer {
    width: 61.85rem;
    height: 17.2rem;
  }

  & .todoList-box {
    width: 100%;
    height: 100%;
    background-color: #f2dda4;
    border: 2px solid black;
    border-radius: 3.13rem;
    position: relative;
  }

  & .todoList-box-line {
    border-right: 1px dashed black;
    height: 100%;
    position: absolute;
    left: 20rem;
  }
`;

export default ToDoMain;
