import React from 'react';
import './app.scss';
import Header from '../header/header';
import SideMenu from '../side-menu/side-menu';
import Main from '../main/main';

function App() {
  return (
    <>
      <Header />
      <SideMenu />
      <Main />
    </>
  );
}

export default App;
