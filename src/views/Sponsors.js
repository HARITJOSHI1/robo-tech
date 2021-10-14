import React from 'react';
import NetCamp from '../assets/images/netcamp-logo.jpeg';
import GFG from '../assets/images/gfg.png';
import Paytm from '../assets/images/paytm.jpeg';

export default function Sponsors() {
    return (
        <section className="site-content reveal-from-bottom" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100vh', paddingTop: '9rem'}}>
            <img src = {NetCamp} alt= "NetCamp" />
            <img src = {GFG} alt= "GFG" />
            <img src = {Paytm} alt= "Paytm" style={{width: "30%", height: "30%"}}/>
        </section>
    )
}
