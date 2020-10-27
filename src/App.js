import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import LastLogin from './components/LastLogin/LastLogin'
import Main from './components/Main/Main'

import './App.scss'


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LastLogin />
      <div className="App__content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App
