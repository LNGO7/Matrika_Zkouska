import Info from './Info' //importing Info.js
import './output.css' //importing css file
import user from './user.png' //importing IMG
import React, { useState } from 'react';

//const [userData, setUserData] = useState(data)

const data = {
    osobni_cislo : 882011,
    prijmeni_jmeno: "MENCNER Jakub",
    titul: "-",
    datum_misto: "1.1.2000 Čáslav",
    rodne_cislo: "99110913/0915",
    statni_obcanstvi: "Česká republika",
    zdravotni_zpusobilost: "Klasifikace A",
    dosazene_vzdelani: "SPŠ Kutná Hora - informační technologie 2019",
    jazyk: "Stanag AJ úroveň 3232",
    trvaly_pobyt: "Kounicova 1562, Čáslav, 296 01",
    rodinny_stav: "svobodný",
    partner: "-",
    deti: "-",
    otec: "MENCNER Oldrich, Kounicova 1562, Čáslav, 296 01",
    matka: "MENCNEROVÁ Karolína, Kounicova 1562, Čáslav, 296 01",
    specializace: "Kybernetická bezpečnost",
    hodnost: "desátník",
    tel_cislo: "+420 778 511 267",
    email_osobni: "mencnerkuba@seznam.cz",
    email_pracovni: "jakub.mencner@unob.cz",
    velitel: "Mjr. Martin Smola",
}

function Output(){
    

    return(
        <div class="container mt-5" id="filter">  
        <img src={user} class="user" alt="user"/>
            <div class="information">
                <h3>Informace</h3>
                <Info data = {data}/> 
            </div>
        </div>    
    )
}

export default Output