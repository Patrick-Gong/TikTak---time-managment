import styled from 'styled-components';
import ToDoDataContext from '../store/ToDoDataCtx';
import ToDoIdContext from '../store/ToDoIdCtx';
import { useContext, useRef, useState } from 'react';

function ToDoItem({ id, content, isChecked, emoji, onGoToForm }) {
  const emojiData = [
    { value: 1, emoji: '❤️' },
    { value: 2, emoji: '🤣' },
    { value: 3, emoji: '😭' },
    { value: 4, emoji: '🤔' },
  ];

  const { deleteToDo, completeToDo, reviewToDo } = useContext(ToDoDataContext);
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleClickOption = (e) => {
    setSelectedEmoji(e.target.value);
    reviewToDo(id, e.target.value);
    setIsDropDown(false);
  };

  const handleClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  const inputRef = useRef();

  const handleCheckboxChange = () => {
    completeToDo(id, inputRef.current.checked);
  };

  return (
    <StyledListItem>
      <StyledLabel htmlFor="checkTodo">
        <input
          type="checkbox"
          name="checkTodo"
          id="checkTodo"
          ref={inputRef}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox_icon"></span>
      </StyledLabel>
      <StyledContentSection>
        <p className="content">{content}</p>
      </StyledContentSection>
      <StyledButtonContainer>
        <button className="blue_button" onClick={() => onGoToForm(id)}>
          수정
        </button>
        <button className="white_button" onClick={() => deleteToDo(id)}>
          삭제
        </button>
      </StyledButtonContainer>
      <StyledReviewButtonContainer>
        <StyledSelectButton type="button" onClick={handleClickSelect}>
          <StyledSelect isEmojiSelected={selectedEmoji !== ''}>
            {selectedEmoji === '' ? '🧒' : selectedEmoji}
          </StyledSelect>
        </StyledSelectButton>
        {isDropDown && (
          <StyledDropDown>
            {emojiData.map((option) => (
              <StyledOption
                value={option.emoji}
                key={option.value}
                onClick={handleClickOption}
              >
                {option.emoji}
              </StyledOption>
            ))}
          </StyledDropDown>
        )}
      </StyledReviewButtonContainer>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  width: 100%;
  background-color: #d1b9f8;
  border-radius: 4px;
`;

const StyledLabel = styled.label`
  margin-left: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  & input {
    display: none;
  }

  & .checkbox_icon {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background-color: transparent;
    border: 3px solid black;
    position: relative;
    border-radius: 0.3rem;
  }

  & .checkbox_icon::before,
  .checkbox_icon::after {
    content: ''; // 가상요소 필수값
    display: inline-block; // 크기 지정
    width: 0.23rem;
    height: 0; // 체크박스가 체크가 되면 변화값으로 커지게 하기 위해 (일단 화면에는 나타나지 않음)
    background-color: red;
    position: absolute; // 체크박스 테두리 기준으로 위치조정 가능
    transform-origin: left top; // 기울기 지정, 기준점을 왼쪽 상단 모서리로 (기본값은 중심임)
  }

  // 가상요소 before
  & .checkbox_icon::before {
    top: 0.3rem; // 위치값 top
    left: 0.01rem; // 위치값 left
    transform: rotate(-45deg); // 회전값
  }

  // 가상요소 after
  & .checkbox_icon::after {
    top: 0.7rem; // 위치값 top
    left: 0.5rem; // 위치값 left
    transform: rotate(-135deg); // 회전값
  }

  // 체크되었을 때 테투리 설정
  & .checkTodo:checked + .checkbox_icon {
    border-color: red;
  }

  // 체크되었을 때 가상요소 before
  & #checkTodo:checked + .checkbox_icon::before {
    height: 0.625rem; // 높이값 지정
    transition: all 0.15s ease; // 0.15초 변화시간 줌
  }

  // 체크되었을 때 가상요소 after
  & #checkTodo:checked + .checkbox_icon::after {
    height: 1.25rem; // 높이값 지정
    transition: all 0.15s ease 0.15s; // 0.15초 변화시간 + 딜레이 시간 줌
  }
`;

const StyledContentSection = styled.div`
  padding-left: 2rem;
  padding-right: 1rem;
  width: 38rem;

  & .content {
    font-family: 'SeoulNamsanM';
    font-size: 1.4rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledButtonContainer = styled.p`
  width: 8rem;
  display: flex;
  justify-content: space-between;

  & .blue_button {
    width: 3.6rem;
    height: 2.3rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 6px solid #000;
    background: #06c3ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'SeoulNamsanM';
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .white_button {
    width: 3.6rem;
    height: 2.3rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 6px solid #000;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'SeoulNamsanM';
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .white_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      0 -4px 6px rgba(255, 255, 255, 0.1), inset 0 4px 6px rgba(0, 0, 0, 0.2),
      inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }

  & .blue_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      0 -4px 6px rgba(255, 255, 255, 0.1), inset 0 4px 6px rgba(0, 0, 0, 0.2),
      inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }
`;

const StyledReviewButtonContainer = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

// 초기 버튼
const StyledSelectButton = styled.button`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
`;

// 초기 버튼 속 컨테이너
const StyledSelect = styled.p`
  width: 95%;
  font-family: 'SeoulNamsanM';
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropDown = styled.div`
  position: absolute;
  width: 7rem;
  border-radius: 0.6rem;
  padding-left: 0.4rem;
  left: 1.6rem;
  z-index: 0;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  @keyframes dropdown {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: dropdown 0.4s ease;
`;

const StyledOption = styled.button`
  width: 1.2rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
  background: none;
  border: none;
  &:hover {
  }
`;

export default ToDoItem;
