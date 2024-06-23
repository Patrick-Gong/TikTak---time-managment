import styled from 'styled-components';
import clockImage from '../../assets/TikTak_clock.png';
import addImage from '../../assets/TikTak_add.png';
import { useRef } from 'react';

function ToDoForm({ onAdd }) {
  const textarea = useRef();

  function handleAdd() {
    onAdd(textarea.current.value);
  }

  return (
    <StyledForm>
      <div className="todoForm-container">
        <div className="time-input-wrapper">
          <img src={clockImage} alt="clock" />
          <div className="time-input">
            <div className="custom-select-wrapper">
              <select className="custom-select" name="" id="">
                <option value="1">오전 12:00</option>
              </select>
            </div>
            ~
            <div className="custom-select-wrapper">
              <select className="custom-select" name="" id="">
                <option value="1">오후 12:00</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="todo-input-wrapper">
          <label htmlFor="todo">
            <img src={addImage} alt="add" />
          </label>
          <textarea
            type="text"
            id="todo"
            name="todo"
            className="todo-input"
            placeholder="할 일을 추가해보세요!"
            ref={textarea}
          />
        </div>
        <p className="modal-actions">
          <button className="blue_button" onClick={handleAdd}>
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

  & .time-input-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & .time-input-wrapper img {
    width: 1.7rem;
    height: 1.7rem;
  }

  & .time-input {
    margin-left: 1.5rem;
    width: 80%;
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }

  & .custom-select:focus {
    background-color: #bcf4f5;
  }

  & .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
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
