import styled from 'styled-components';
// import Calendar from '../Main/Calendar';
import ToDoForm from '../Main/ToDoForm';
import ToDoList from '../Main/ToDoList';
import Calendar from './Calendar';

function ToDoMain() {
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
            <ToDoList />
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
