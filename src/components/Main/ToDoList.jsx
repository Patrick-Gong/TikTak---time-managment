import styled from 'styled-components';

function ToDoList() {
  return (
    <StyledList>
      <div className="list-container">
        <ul>
          <li>
            <StyledTimeSection>
              <p className="time">10:00 AM</p>~<p className="time">11:00 AM</p>
            </StyledTimeSection>
            <StyledContentSection><p className="content">문방구에서 지우개 사오기</p></StyledContentSection>
            <p className="button-container">
              <button className="blue_button">수정</button>
              <button className="white_button">삭제</button>
            </p>
          </li>
          <li>
            <StyledTimeSection>
              <p className="time">6:00 PM</p>~<p className="time">8:00 PM</p>
            </StyledTimeSection>
            <StyledContentSection>
              <p className="content">수학학원 가기</p>
            </StyledContentSection>
            <p className="button-container">
              <button className="blue_button">수정</button>
              <button className="white_button">삭제</button>
            </p>
          </li>
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
  margin-top: 1.1rem;

  & .list-container {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  & li {
    display: flex;
    align-items: center;

    padding: 1rem 0rem;
    border-bottom: 1px dashed black;
  }

  & .time {
    width: 6.3rem;
    display: flex;
    justify-content: flex-end;
  }

  & .button-container {
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }

  & .blue_button {
    width: 3.6rem;
    height: 2.3rem;
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
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .white_button {
    width: 3.6rem;
    height: 2.3rem;
    /* flex-shrink: 박스 안의 콘텐츠의 크기를 설정, 값이 클수록 콘텐츠가 차지하는 공간 줄어듬 */
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

const StyledTimeSection = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
  font-family: 'SeoulNamsanM';
  font-size: 1.4rem;
  font-weight: 600;

  & li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 1.3rem 0rem;
  }

  & li .time {
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

export default ToDoList;
