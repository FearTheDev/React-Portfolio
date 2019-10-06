import React from 'react';
import { SideNavigation, SocialMedia } from './components';

function App() {
  return (
    <div>
      <SideNavigation handle="FearTheDev" user="John Shoff" title="Full Stack Developer" img="https://avatars2.githubusercontent.com/u/13228579?v=4" copyright="Copyright &copy;2019 FearTheDev.com">
        <SocialMedia twitter="@FearTheDev" github="FearTheDev" linkedin="FearTheDev" />
      </SideNavigation>
    </div>
  );
}

export default App;
