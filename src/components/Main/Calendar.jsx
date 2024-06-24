import styled from 'styled-components';
import { useState, useContext } from 'react';
import UserIdContext from '../store/UserIdContext';

function Calendar({ onDateClick }) {
  const { userId } = useContext(UserIdContext);
  console.log('Current userId:', userId);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  let currentDate = new Date();

  const [renderedDate, setRenderedDate] = useState(currentDate);

  const renderedYear = renderedDate.getFullYear();
  const renderedMonth = renderedDate.getMonth();

  const prevMonth_lastDay = new Date(renderedYear, renderedMonth, 0);
  const thisMonth_lastDay = new Date(renderedYear, renderedMonth + 1, 0);

  const PLDate = prevMonth_lastDay.getDate();
  const PLDay = prevMonth_lastDay.getDay();

  const TLDate = thisMonth_lastDay.getDate();
  const TLDay = thisMonth_lastDay.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  console.log(dates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  const goToPrevMonth = () => {
    setRenderedDate(
      new Date(renderedDate.getFullYear(), renderedDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setRenderedDate(
      new Date(renderedDate.getFullYear(), renderedDate.getMonth() + 1, 1)
    );
  };


  const handleDateClick = (date) => {
    const clickedDate = new Date(renderedYear, renderedMonth, date);
    onDateClick(clickedDate);
  };

  return (
    <StyledCalendar>
      <StyledHeader>
        <button onClick={goToPrevMonth}>&lt;</button>
        <h2 className="present_year-month">{`${renderedYear}년 ${
          renderedMonth + 1
        }월`}</h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </StyledHeader>
      <StyledDays>
        <div className="day" id="sunday">
          일
        </div>
        <div className="day">월</div>
        <div className="day">화</div>
        <div className="day">수</div>
        <div className="day">목</div>
        <div className="day">금</div>
        <div className="day" id="saturday">
          토
        </div>
      </StyledDays>
      <StyledDates>
        {dates.map((date, i) => (
          <li key={i} className="date" onClick={() => handleDateClick(date)}>
            <span
              className={`${
                i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other'
              } 
                ${
                  renderedMonth === currentDate.getMonth() &&
                  renderedYear === currentDate.getFullYear() &&
                  date === currentDate.getDate()
                    ? 'today'
                    : ''
                }`}
            >
              {date}
            </span>
          </li>
        ))}
      </StyledDates>
    </StyledCalendar>
  );
}

const StyledCalendar = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  font-family: 'SeoulNamsanM';
  border: 1px solid black;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0.6rem 0;
  font-weight: 600;
  color: #173223;

  & button {
    border: none;
  }
`;

const StyledDays = styled.div`
  display: flex;
  width: 100%;
  padding: 0.2rem 0;
  border-top: 1px dashed black;
  border-bottom: 1px solid black;

  & .day {
    color: black;
    width: calc(100% / 7);
    text-align: center;
    font-weight: 700;
  }

  & #saturday {
    color: blue;
  }

  & #sunday {
    color: red;
  }
`;

const StyledDates = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 0.6rem;
  margin: 0.7rem 0;
  width: 100%;

  & .date {
    text-align: center;
  }

  & .this {
    color: black;
    font-weight: 600;
  }

  & .this:hover {
    background-color: #06c3ff;
    border: none;
    padding: 0.2rem 0.4rem;
    border-radius: 1rem;
  }

  & .other {
    color: gray;
    font-weight: 300;
  }

  & .today {
    border: none;
    padding: 0.4rem;
    border-radius: 1rem;
    background-color: #167e9d;
    color: white;
  }
`;

export default Calendar;
