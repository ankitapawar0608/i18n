import React from 'react'
import "./Home.css"
import i18n from '../../utils/i18n';

function Home() {
    // const users = 15;



    return (
        <div>

            <div className="row d-flex justify-content-center">
                <form className='form m-5 p-3 bg-white w-50 rounded'>
                    <div className='m-4'>



                        <select
                            defaultValue={localStorage.getItem("lang")}
                            onChange={(e) => {
                                localStorage.setItem("lang", e.target.value);
                                window.location.reload();

                            }}
                            className=' form-control my-3 border-black'>
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="mr">Marathi</option>
                            <option value="sp">Spanish</option>
                        </select>
                        <h1>{i18n("welcomemsg")}</h1>

                        <p className=''>{i18n("namemsg")}</p>

                        <h3>{i18n("greetingmsg")}</h3>


                    </div>
                </form>
            </div>









            {/* <p>{users} users are learning react.</p> */}
        </div>
    )
}

export default Home