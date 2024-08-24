import styled from 'styled-components';
import ToDoItem from './ToDoItem';
import SelectedDateContext from '../store/SelectedDateCtx';
import ToDoDataContext from '../store/ToDoDataCtx';
import { useContext, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function ToDoList({ onGoToForm }) {
  const { selectedDate } = useContext(SelectedDateContext);
  // 백엔드 연동 시 활용
  // const { todoData } = useContext(ToDoDataContext);

  // const todoDataOnSelectedDate = todoData.filter((i) => {
  //   const itemDate = new Date(i.date).toDateString();
  //   return itemDate === selectedDate.toDateString();
  // });

  

  const todoDataOnSelectedDate = [
    {
      todo_id: 7,
      user: '걸어봐위엄라이커라이온',
      date: '2024-08-24T17:00:00.123456+09:00',
      content: '멋사와 함께 행복하기',
      is_checked: true,
      emoji: '',
    },
    {
      todo_id: 11,
      user: '걸어봐위엄라이커라이온',
      date: '2024-08-24T17:00:00.123456+09:00',
      content: '토스트 구워먹기',
      is_checked: false,
      emoji: '',
    },
    {
      todo_id: 8,
      user: '걸어봐위엄라이커라이온',
      date: '2024-08-24T17:00:00.123456+09:00',
      content: '멋사와 함께 레쓰고',
      is_checked: false,
      emoji: '',
    },
  ];
  console.log(todoDataOnSelectedDate);

  const [alignedTodoList, setAlignedTodoList] = useState(todoDataOnSelectedDate);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const items = JSON.parse(JSON.stringify(alignedTodoList));
    const [targetItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, targetItem);
    setAlignedTodoList(items);
  };


  return (
    <ListWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <List
              ref={provided.innerRef}
              droppableProps={provided.droppableProps}
            >
              {alignedTodoList.map((todo, index) => (
                <Draggable
                  draggableId={`${todo.todo_id}`}
                  index={index}
                  key={todo.todo_id}
                  // 상호작용 가능한 요소에서의 드래그를 차단하지 않도록 해줌
                  disableInteractiveElementBlocking
                >
                  {(provided) => (
                    <ToDoItem
                      key={todo.todo_id}
                      id={todo.todo_id}
                      content={todo.content}
                      isChecked={todo.is_checked}
                      emoji={todo.emoji}
                      onGoToForm={onGoToForm}
                      ref={provided.innerRef}
                      draggableProps={provided.draggableProps}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
width:100%;

`;

export default ToDoList;
