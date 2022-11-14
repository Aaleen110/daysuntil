import './App.css';
import React, { useState, useEffect } from 'react'
import { colors } from './utils/colors';
import BrideGroom from "./assets/bride_groom.svg"
import DecorationPropsLeft from "./assets/decoration_props_left.svg"
import DecorationPropsRight from "./assets/decoration_props_right.svg"

import TimeBlock from './components/TimeBlock';
import moment from "moment"

function AppWeb() {

    const [days, setDays] = useState(0);

    useEffect(() => {
        var given = moment("2023-02-03", "YYYY-MM-DD");
        var current = moment().startOf('day');
        let days = moment.duration(given.diff(current)).asDays();
        setDays(days - 1);
    })
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.bgColor }}>


            <img style={{ height: '40%', position: 'absolute', left: 0, top: 20 }} src={DecorationPropsLeft} alt="decor_left" />
            <img style={{ height: '40%', position: 'absolute', right: 0, top: 20 }} src={DecorationPropsRight} alt="decor_right" />


            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '60vh', width: '40%', border: '1px solid #eee', borderRadius: 16, boxShadow: '5px 5px 5px #EEEEEE', margin: 20 }}>

                <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <h2 style={{ padding: 12, color: colors.themeGreen, fontFamily: 'Hoefler', fontSize: 30 }}>03-02-2023</h2>
                </div>

                <div style={{ height: '20%', width: '100%' }}>
                    <div style={{ paddingLeft: 16, fontSize: 60, color: colors.themeGreen, fontFamily: 'Hoefler' }}>{days}</div>
                    <div className='newText' style={{ paddingLeft: 16, fontSize: 34, color: colors.themeGreen, fontFamily: 'Hoefler' }}>days until Samreen</div>
                    <div style={{ paddingLeft: 16, fontSize: 34, color: colors.themeGreen, color: colors.themeGreen, fontFamily: 'Hoefler' }}>says "Qubool hai"</div>
                    <div style={{ paddingLeft: 16, fontSize: 34, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Inshallah </div>
                </div>

                <div style={{ height: '40%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ height: '90%' }} src={BrideGroom} alt="bride_groom" />
                </div>

                <div style={{ height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: 30, color: colors.themeGreen, fontFamily: 'Hoefler' }}>Aaleen & Samreen</div>
                </div>

                <div style={{ height: '25%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TimeBlock />
                </div>
            </div>

        </div>
    );
}

export default AppWeb;
