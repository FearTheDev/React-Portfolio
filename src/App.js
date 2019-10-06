import React from 'react';
import { Header, Footer } from './components';
import ProfileImage from './components/ProfileImage';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Material UI + Custom Styling</h1>
      </Header>
        <div className="content">
          <ProfileCard>
            
            <ProfileImage src="https://avatars2.githubusercontent.com/u/13228579?v=4" alt="image of john shoff" />
            <h1>John Shoff</h1>
          </ProfileCard>
          
        </div>
    </div>
  );
}

export default App;
