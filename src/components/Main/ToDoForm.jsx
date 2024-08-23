import styled from 'styled-components';
import clockImage from '../../assets/TikTak_clock.png';
import addImage from '../../assets/TikTak_add.png';
import { useContext, useRef, useEffect } from 'react';
import ToDoDataContext from '../store/ToDoDataCtx';
import SelectedDateContext from '../store/SelectedDateCtx';

function ToDoForm({ isForEdit, targetId, onFinish }) {
  const { addToDo, editToDo } = useContext(ToDoDataContext);
  const { selectedDate } = useContext(SelectedDateContext);
  const textareaRef = useRef();

  useEffect(() => {
    console.log('selectedDate updated:', selectedDate);
  }, [selectedDate]);
  

  const getKoreanDay = (date) => {
    const daysInKorean = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    return daysInKorean[date.getDay()];
  };

  useEffect(() => {
    if (isForEdit && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isForEdit]);

  return (
    <StyledForm>
      <div className="todoForm-container">
        <div className="date-wrapper">
          <img src={clockImage} alt="clock" />
          <p className="date">
            {`${selectedDate.getFullYear()}년 ${selectedDate.getMonth()}월 ${selectedDate.getDate()}일 ${getKoreanDay(
              selectedDate
            )}`}
          </p>
        </div>
        <hr />
        <div className="todo-input-wrapper">
          <label htmlFor="todoBox">
            <img src={addImage} alt="add" />
          </label>
          <textarea
            type="text"
            id="todoBox"
            name="todo"
            className="todo-input"
            placeholder="할 일을 추가해보세요!"
            ref={textareaRef}
          />
        </div>
        <p className="modal-actions">
          <button
            className="blue_button"
            onClick={
              !isForEdit
                ? () => addToDo(textareaRef.current.value)
                : () =>
                    editToDo(targetId, textareaRef.current.value) && onFinish()
            }
          >
            추가하기
          </button>
          <button className="white_button">취소</button>
        </p>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .todoForm-container {
    width: 90%;
  }

  & .date-wrapper {
    display: flex;
    align-items: center;
  }

  & .date {
    margin-left: 1.2rem;
    font-family: 'SeoulNamsanM';
    font-weight: 600;
  }

  & .date-wrapper img {
    width: 1.7rem;
    height: 1.7rem;
  }

  & hr {
    border: 1px dashed black;
    margin: 0.7rem 0rem;
  }

  & .todo-input-wrapper {
    width: 100%;
    display: flex;
  }

  & .todo-input-wrapper img {
    width: 1.7rem;
    height: 1.7rem;
  }

  & .todo-input {
    width: 90%;
    height: 5.5rem;
    margin-left: 1.2rem;
    border-radius: 1rem;
    border: 0.125rem solid black;
    padding: 0.5rem 1rem;
    font-family: 'SeoulNamsanM';
    font-size: 1rem;
    font-weight: 400;
    resize: none;
  }

  & .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.3rem;
    margin-right: 0.8rem;
  }

  & .blue_button {
    width: 6.25rem;
    height: 2.8rem;
    /* flex-shrink: 박스 안의 콘텐츠의 크기를 설정, 값이 클수록 콘텐츠가 차지하는 공간 줄어듬 */
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 6px solid #000;
    background: #06c3ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'SeoulNamsanM';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .white_button {
    width: 4.5rem;
    height: 2.8rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 6px solid #000;
    background: #fff;
    color: #000;
    font-family: 'SeoulNamsanM';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .white_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      /* Subtle shadow around the button */ 0 -4px 6px rgba(255, 255, 255, 0.1),
      /* Lighter shadow at the top */ inset 0 4px 6px rgba(0, 0, 0, 0.2),
      /* Inner shadow for depth */ inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }

  & .blue_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      /* Subtle shadow around the button */ 0 -4px 6px rgba(255, 255, 255, 0.1),
      /* Lighter shadow at the top */ inset 0 4px 6px rgba(0, 0, 0, 0.2),
      /* Inner shadow for depth */ inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }
`;

export default ToDoForm;
