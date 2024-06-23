import styled from 'styled-components';

function ToDoItem() {
  return (
    <StyledListItem>
      <StyledTimeSection>
        <p className="time">10:00 AM</p>~<p className="time">11:00 AM</p>
      </StyledTimeSection>
      <StyledContentSection>
        <p className="content">문방구에서 지우개 사오기</p>
      </StyledContentSection>
      <p className="button-container">
        <button className="blue_button">수정</button>
        <button className="white_button">삭제</button>
      </p>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  border-bottom: 1px dashed black;

  & .button-container {
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }

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

const StyledTimeSection = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  font-family: 'SeoulNamsanM';
  font-size: 1.4rem;
  font-weight: 600;

  & .time {
    width: 6.3rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledContentSection = styled.div`
  padding-left: 5rem;
  padding-right: 1rem;
  width: 32rem;

  & .content {
    font-family: 'SeoulNamsanM';
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export default ToDoItem;
