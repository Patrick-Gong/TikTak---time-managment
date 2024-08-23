import styled from 'styled-components';
import ToDoItem from './ToDoItem';
import SelectedDateContext from '../store/SelectedDateCtx';
import ToDoDataContext from '../store/ToDoDataCtx';
import { useContext } from 'react';

function ToDoList({ onGoToForm }) {
  const { selectedDate } = useContext(SelectedDateContext);
  const { todoData } = useContext(ToDoDataContext);

  // const todoDataOnSelectedDate = todoData.filter((i) => {
  //   const itemDate = new Date(i.date).toDateString();
  //   return itemDate === selectedDate.toDateString();
  // });

  const todoDataOnSelectedDate = [
    {
      todo_id: 7,
      user: '걸어봐위엄라이커라이온',
      date: '2024-06-17T17:00:00.123456+09:00',
      content: '멋사와 함께 행복하기',
      is_checked: false,
      emoji: '',
    },
  ];
  console.log(todoDataOnSelectedDate);

  return (
    <StyledList>
      <div className="list-container">
        <ul>
          {todoDataOnSelectedDate.map((todo) => (
            <ToDoItem
              key={todo.todo_id}
              id={todo.todo_id}
              content={todo.content}
              isChecked={todo.isChecked}
              emoji={todo.emoji}
              onGoToForm={onGoToForm}
            />
          ))}
        </ul>
      </div>
    </StyledList>
  );
}

const StyledList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & .list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    
  }
`;

export default ToDoList;
