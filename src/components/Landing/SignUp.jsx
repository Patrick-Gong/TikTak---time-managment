import styled from 'styled-components';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const username = useRef('');
  const password = useRef('');

  const BASE_URL = import.meta.env.BASE_URL;

  const navigate = useNavigate();

  const postSignUp = async (signUpData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, signUpData);
      if (response.status === 200) {
        navigate('/');
        alert(response.data.detail);
      }
    } catch (error) {
      console.log('회원가입에 실패했습니다 다시 시도해주세요');
    }
  };

  function handleSignUp(event) {
    event.preventDefault();
    const signUpData = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(signUpData);
    postSignUp(signUpData);
  }

  function handleCancel(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <StyledSignUp>
      <div className="signUp-box">
        <form onSubmit={handleSignUp}>
          <div className="input-box-container">
            <div className="input-box">
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" name="username" ref={username} />
            </div>
            <div className="input-box">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={password}
              />
            </div>
            <div className="input-box">
              <label htmlFor="tel">전화번호</label>
              <input type="tel" id="tel" name="tel" />
            </div>
            <div className="input-box">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <div className="form-actions-container">
            <p className="form-actions">
              <button className="blue_button" type="submit">
                회원가입
              </button>
              <button
                className="white_button"
                type="button"
                onClick={handleCancel}
              >
                취소
              </button>
            </p>
          </div>
        </form>
      </div>
    </StyledSignUp>
  );
}

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & .signUp-box {
    width: 41rem;
    flex-shrink: 0;
    background-color: #f2dda4;
    border-radius: 1.875rem;
    border: 0.125rem solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0rem 3rem 0rem;
  }

  & .signUp-box form {
    width: 30.06rem;
  }

  & .input-box-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25.19rem;
    width: 100%;
  }

  & .input-box {
    width: 26.25rem;
    height: 4.69rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  & .input-box-container label {
    margin-left: 0.75rem;
    color: #000;
    font-family: 'SeoulNamsanM';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .input-box-container input {
    width: 26.25rem;
    height: 2.5rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 0.125rem solid black;
    padding-left: 1rem;
    font-size: 1.3rem;
  }

  & .input-box-container input:focus {
    background-color: #bcf4f5;
  }

  & .form-actions-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2.88rem;
  }

  & .form-actions {
    width: 13.19rem;
    height: 4.12rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & .blue_button {
    width: 7.25rem;
    height: 3.4375rem;
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

  & .blue_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      /* Subtle shadow around the button */ 0 -4px 6px rgba(255, 255, 255, 0.1),
      /* Lighter shadow at the top */ inset 0 4px 6px rgba(0, 0, 0, 0.2),
      /* Inner shadow for depth */ inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }

  & .white_button {
    width: 5.25rem;
    height: 3.4375rem;
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
`;

export default SignUp;
