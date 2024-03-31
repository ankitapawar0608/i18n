import React from 'react'
import i18n from "./../../utility/i18n"

function Home() {

    const users = 15;
    return (
        <>

        <h1>{i18n({lang:"en", keyword: "welcomemsg"})}</h1>
        

            <p>I am Ankita Pawar</p>
            <h3>Have a great day!</h3>
            <p>{users} users are learning react.</p>

        </>
    )
}

export default Home

// import internationaliazation from "./../../utility/inter";



//<h1>{internationaliazation({lang : "en" , keyword : "welcomemsg"})}</h1>


