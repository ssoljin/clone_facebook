import './App.css';
import logo from './facebook.svg';


function App() {
  return (
    <div className="App">
      <div className='Welcome-sign-in'>
        <div className='Logo-with-phrase'>
          <img src={logo} className='Logo' alt='logo'/>
          <div className='Phrase'>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</div>
        </div>
          <div className='Sign-in-zone-with-page-phrase'>
            <div className='Sign-in-zone'>
              <input className='ID'/>
              <input className='Password'/>
              <button className="Sign-in-button">로그인</button>
              <a className='Forget-password' href="https://youtube.com">비밀번호를 잊으셨나요?</a>
              <div className='Division-line'/>
              <button className='Create-account-button'>새 계정 만들기</button>
            </div>
            <div className='Page-phrase'>
              유명인, 브랜드 또는 비즈니스를 위한 <a className='Make-page' href='https://google.com'>페이지 만들기</a>.
            </div>
          </div>

        </div>
        
      <div className='Family-site'></div>
    </div>
  );
}

export default App;
