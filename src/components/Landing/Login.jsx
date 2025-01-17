import styled from 'styled-components';
import TikTakCI from '../../assets/TikTakCi.png';

function Login({onEnter, onSignUp}) {
  return (
    <StyledLogin>
      <div className="login-container">
        <img src={TikTakCI} alt="TIK_TAK" />
        <form action="">
          <div className="input-box-container">
            <input
              className="input-box"
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요."
            />

            <input
              className="input-box"
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>

          <button className="blue_button" onClick={onEnter}>LOG IN</button>

          <p className="form-actions">
            <button className="row_button" onClick={onSignUp}>회원가입</button>
            <button className="row_button">아이디 찾기</button>
          </p>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // height값을 지정해야 align-items가 적용된다.

  & .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 26.8rem;
    /* margin-top: 14rem; */
  }

  & img {
    width: 100%;
    height: 7.42rem;
  }

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .input-box-container {
    display: grid;
    margin-top: 4.64rem;
    width: 100%;
    gap: 2.81rem;
  }

  & .input-box {
    border-radius: 1.875rem;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 1);
    border-style: solid;
    border-width: 0.13rem;
    width: 26.4rem;
    height: 2.3rem;
    outline: none;
    text-align: center;
    font-size: 1.3rem;
  }

  & .input-box:focus {
    background-color: #bcf4f5;
  }

  & .input-box::placeholder {
    font-family: 'SeoulNamsanM';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
  }

  & .blue_button {
    width: 16.25rem;
    height: 2.4375rem;
    /* flex-shrink: 박스 안의 콘텐츠의 크기를 설정, 값이 클수록 콘텐츠가 차지하는 공간 줄어듬 */
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 6px solid #000;
    background: #06c3ff;
    margin-top: 3.89rem;
    color: #000;
    font-family: 'Luckiest Guy';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .blue_button:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
      /* Subtle shadow around the button */ 0 -4px 6px rgba(255, 255, 255, 0.1),
      /* Lighter shadow at the top */ inset 0 4px 6px rgba(0, 0, 0, 0.2),
      /* Inner shadow for depth */ inset 0 -4px 6px rgba(255, 255, 255, 0.2);
    border-radius: 1.875rem;
    border: 6px solid #000;
  }

  & .form-actions {
    display: flex;
    margin-top: 4.19rem;
    width: 15.69rem;  
    justify-content: space-between;
  }

  & .row_button {
    color: #4c4040;
    font-family: 'SeoulNamsanM';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    background-color: transparent;
    border: 0;
  }

  & .row_button:hover {
    color: #5C5D8D;
  }
`;
