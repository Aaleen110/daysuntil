import React, { useState, useEffect } from 'react'
import { colors } from '../../utils/colors'
import moment from "moment"

export default function TimeBlock() {


  const [days, setDays] = useState(0);
  const [hours, setHours] = useState();
  const [minutes, setMinutess] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    var given = moment("2023-02-03", "YYYY-MM-DD");
    var current = moment().startOf('day');
    let days = moment.duration(given.diff(current)).asDays();




    setInterval(() => {
      let hours = 24 - moment().format('HH');
      let minutes = 60 - moment().format('mm');
      let seconds = 60 - moment().format('ss');

      setHours(hours);
      setMinutess(minutes);
      setSeconds(seconds);

    }, 1000)

    setDays(days);


  }, [])

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', marginTop: 26 }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 4, paddingRight: 4 }}>
        <div style={{ height: '70px', width: '70px', border: '1px solid #eee', borderRadius: 10, backgroundColor: colors.themeGreen, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ height: 20, width: 20, backgroundColor: colors.themeGreen, border: '1px solid transparent', borderRadius: 10, position: 'absolute', top: -8 }}></div>
          <div style={{ fontSize: 36, color: colors.textColor, fontFamily: 'Hoefler' }}>{days}</div>
        </div>
        <div style={{ marginTop: 8, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Days</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 4, paddingRight: 4 }}>
        <div style={{ height: '70px', width: '70px', border: '1px solid #eee', borderRadius: 10, backgroundColor: colors.themeGreen, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ height: 20, width: 20, backgroundColor: colors.themeGreen, border: '1px solid transparent', borderRadius: 10, position: 'absolute', top: -8 }}></div>
          <div style={{ fontSize: 36, color: colors.textColor, fontFamily: 'Hoefler' }}>{hours}</div>
        </div>
        <div style={{ marginTop: 8, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Hours</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 4, paddingRight: 4 }}>
        <div style={{ height: '70px', width: '70px', border: '1px solid #eee', borderRadius: 10, backgroundColor: colors.themeGreen, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ height: 20, width: 20, backgroundColor: colors.themeGreen, border: '1px solid transparent', borderRadius: 10, position: 'absolute', top: -8 }}></div>
          <div style={{ fontSize: 36, color: colors.textColor, fontFamily: 'Hoefler' }}>{minutes}</div>
        </div>
        <div style={{ marginTop: 8, color: colors.themeGreen, fontFamily: 'Hoefler', color: colors.themeGreen, fontFamily: 'Hoefler' }}>Minutes</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 4, paddingRight: 4 }}>
        <div style={{ height: '70px', width: '70px', border: '1px solid #eee', borderRadius: 10, backgroundColor: colors.themeGreen, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ height: 20, width: 20, backgroundColor: colors.themeGreen, border: '1px solid transparent', borderRadius: 10, position: 'absolute', top: -8 }}></div>
          <div style={{ fontSize: 36, color: colors.textColor, fontFamily: 'Hoefler' }}>{seconds}</div>
        </div>
        <div style={{ marginTop: 8, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Seconds</div>
      </div>


    </div>
  )
}
