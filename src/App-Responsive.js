import './App.css';
import React, { useState, useEffect } from 'react'
import { colors } from './utils/colors';
import BrideGroom from "./assets/bride_groom.svg"
import TimeBlock from './components/TimeBlock';
import moment from "moment"

function AppResponsive() {

  const [width, setWidth] = useState(window.innerWidth);
  const [days, setDays] = useState(0);


  useEffect(() => {
    var given = moment("2023-02-03", "YYYY-MM-DD");
    var current = moment().startOf('day');
    let days = moment.duration(given.diff(current)).asDays();
    setDays(days - 1);

  })
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh', backgroundColor: colors.bgColor }}>

      <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <h2 style={{ padding: 12, color: colors.themeGreen, fontFamily: 'Hoefler' }}>03-02-2023</h2>
      </div>

      <div style={{ height: '20%', width: '100%' }}>
        <div style={{ paddingLeft: 16, fontSize: 50, color: colors.themeGreen, fontFamily: 'Hoefler' }}>{days}</div>
        <div className='newText' style={{ paddingLeft: 16, fontSize: 30, color: colors.themeGreen, fontFamily: 'Hoefler' }}>days until Samreen</div>
        <div style={{ paddingLeft: 16, fontSize: 30, color: colors.themeGreen, color: colors.themeGreen, fontFamily: 'Hoefler' }}>says "Qubool hai"</div>
        <div style={{ paddingLeft: 16, fontSize: 30, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Inshallah </div>
      </div>

      <div style={{ height: '35%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ height: '90%' }} src={BrideGroom} alt="bride_groom" />
      </div>

      <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: 22, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Aaleen & Samreen</div>
      </div>

      <div style={{ height: '25%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TimeBlock />
      </div>
    </div>
  );
}

export default AppResponsive;
