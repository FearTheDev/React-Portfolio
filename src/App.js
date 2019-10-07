import React from 'react';
import { SideNavigation, SocialMedia, MainContent, Greeting, Projects } from './components';
import './styles/app.scss';

// Side Navigation Information
const sideNavigationData = {
  handle: 'FearTheDev',
  user: 'John Shoff',
  title: 'Full Stack Developer',
  img: 'https://avatars2.githubusercontent.com/u/13228579?v=4',
  email: 'fearthedeveloper@gmail.com',
  copyright: 'Copyright 2019 FearTheDev.com',
}

// Social Media Links
const socialMediaData = {
  twitter: 'FearTheDev',
  github: 'FearTheDev',
  linkedin: 'FearTheDev',
}

// Greeting Information
const greetingData = {
  intro: 'Hi, my name is ',
  name: 'John Shoff',
  message: 'I am a Full Stack Developer that enjoys the challenge of writing software that solves problems and displaying data in a visually appealing way.',
}

function App() {
  return (
    <div className="app">
      <SideNavigation {...sideNavigationData}>
        <SocialMedia {...socialMediaData} />
      </SideNavigation>

      <MainContent>
          <Greeting {...greetingData}/>
          <Greeting intro="Ugh.. like dude this is mine.. who invited you? " name="{React}" message="Yeah.. thanks for stopping by I guess.."/>

          {/* <Projects user="FearTheDev"/> */}
          
      </MainContent>
    </div>
  );
}

export default App;
