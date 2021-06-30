import React from "react";
import {useRouter} from "next/router";


function NavBar(){
    const router = useRouter();
    return(
        <div className='navbar-logo'>
            <img className="logo" src={'/website_assets/logo+name_2400x1200.png'} alt="sbnb_logo" onClick={() => {router.push('/').then(__ => {})}} />
        </div>
    )
}

export default NavBar
