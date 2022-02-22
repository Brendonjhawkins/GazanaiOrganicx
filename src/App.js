import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';

import Nav from './Components/NavBar';

function App() {

  return (
    <MainStyle className="App">
      {/* <Nav/> */}
      <h1 className='Brand'>
        GazaNai Organicx
      </h1>
      <h2 className='Affirm'>
      1.) I am the architect of my life; I build its foundation and choose its contents.<br/>
      2.) Today, I am brimming with energy and overflowing with joy.<br/>
      3.) My body is healthy; my mind is brilliant; my soul is tranquil.<br/>
      4.) I am superior to negative thoughts and low actions.<br/>
      5.) I have been given endless talents which I begin to utilize today.<br/>
      6.) I forgive those who have harmed me in my past and peacefully detach from them.<br/>
      7.) A river of compassion washes away my anger and replaces it with love.<br/>
      </h2>
      
    </MainStyle>
  );
}

export default App;

const MainStyle = styled.div`
width: 100%;
height: 100vh;
/* background: radial-gradient(circle at 100%, #fff3c9, #ffe48a 50%, #ffc400 75%, #ffc400 75%); */
font-family: 'Gilda Display', serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.Brand{
  font-family: 'Cormorant SC', serif;
  margin:0;
  font-size: 7rem
}


`