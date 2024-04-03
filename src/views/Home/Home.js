import React, {  } from 'react'
import "./Home.css"
import i18n from '../../utils/i18n';

function Home() {
     const users = 15;

   

    return (
        <div>
            <h1>{i18n("welcomemsg")}</h1>

            <p>{i18n( "namemsg")}</p>

            <h3>{i18n( "greetingmsg")}</h3>

            <select
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang",e.target.value);
                window.location.reload();
                 
            }}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
            </select>
            <p>{users} users are learning react.</p>
        </div>
    )
}

export default Home