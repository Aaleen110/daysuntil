import './App.css';
import React, { useState, useEffect } from 'react'
import moment from "moment"
import AppWeb from './App-Web';
import AppResponsive from './App-Responsive';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })
  return (
    <>
      {width >= 768 ?
        <AppWeb />
        :
        <AppResponsive />
      }
    </>
  );
}

export default App;
