// Import utilites
import React, { useState } from "react";


// Import Components
import MenuMobile from "../MenuMobile";
import Navbar from '../Navbar'
import Herobanner from "../Herobanner";

const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    // Home com Menu desktop invisivel para mobile e vice versa
    return (
        <>
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Navbar setMenuIsVisible={setMenuIsVisible}/>
            <Herobanner />
        </>

    )
}

export default Home