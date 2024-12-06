import styled from 'styled-components';
import ToDoForm from '../Main/ToDoForm';
import ToDoList from '../Main/ToDoList';
import Calendar from './Calendar';
import { useState, useContext, useEffect } from 'react';
import SelectedDateContext from '../store/SelectedDateCtx';

function ToDoMain() {
  const [targetId, setTargetId] = useState(null);
  const { selectedDate, changeDate } = useContext(SelectedDateContext);
  const [isForEdit, setIsForEdit] = useState(false);
  const [formRendered, setFormRendered] = useState(false);

  function goToEdit(id) {
    setIsForEdit(true);
    setTargetId(id);
    setFormRendered(true);
  }

  function finishEdit() {
    setIsForEdit(false);
    setTargetId(null);
  }
  // 선택된 날짜에 해당되는 객체의 id를 담는 state값 필요
  // const [selectedToDoId, setSelectedToDoId] = useState(null);

  console.log(selectedDate);

  return (
    <StyledMain>
      <div className="main-container">
        <div className="main-container_header">
          <div className="calendar-box">
            <Calendar setFormRendered={setFormRendered} />
          </div>
          <div className="todoForm-box">
            {formRendered ? (
              <ToDoForm
                isForEdit={isForEdit}
                targetId={targetId}
                onfinish={finishEdit}
              />
            ) : (
              <EmptyForm>
                달력 속 날짜를 클릭하여
                <br />할 일을 추가해보세요!
              </EmptyForm>
            )}
          </div>
        </div>
        <div className="main-container_footer">
          <div className="todoList-box">
            <ToDoList onGoToForm={goToEdit} />
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
    width: 66rem;
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
    margin-bottom: 3rem;
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

  & .main-container_footer {
    width: 60rem;
    height: 17.2rem;
  }

  & .todoList-box {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: 2px solid black;
    border-radius: 0.4rem;
    position: relative;
  }
`;

const EmptyForm = styled.p`
  color: black;
  font-family: 'SeoulNamsanM';
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 6.6rem;
`;
export default ToDoMain;
