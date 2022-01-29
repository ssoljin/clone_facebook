import './App.css';
import logo from './facebook.svg';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className='Welcome-sign-in'>
        <div className='Logo-with-phrase'>
          {/* <div className='Logo'>1번</div> */}
          <img src={logo} className='Logo' alt='logo'/>
          <div className='Phrase'>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</div>
          {/* <div className='Phrase'>2번</div> */}
        </div>
        <div className='Sign-in-zone'>3번</div>
      </div>
      <div className='Family-site'></div>
    </div>
  );
}

export default App;
