import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Footer from "./subcomponents/Footer";
import Cap from "./subcomponents/Cap";
import Sidebar from "./subcomponents/Sidebar";

import { useState } from "react";
import { useEffect } from "react";


const Layout = () => {

    
    const [flag, setFlag] = useState(null)


    useEffect(() => {
        // const result = async () => {
        //     const data = await getUser()
        //     console.log(data.data)

    
        //     if (data.data) {
        //         setFlag(true)
        //         setUser(data.data)
        //     } else {
        //         setFlag(false)
        //     }
        // }
        // result()
        setFlag(true)
      }, []);

    const location = useLocation()

    const choice = () => {
        if (location.pathname === "/")
            return "1";
        else if (location.pathname.includes("information"))
            return "2";
        else if (location.pathname.includes("traffic"))
            return "3";
        else if (location.pathname.includes("add"))
            return "4";
        else if (location.pathname.includes("visitors"))
            return "5"
        return "1";
    }
  


    if (flag === null) {
        // значит не весь компонент загрузился
    } else {
        return (
            <>
                <div className="container">
                    <Sidebar choice={choice()} />
                    <main>
                        <Cap />
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </>
        );
    }
};

export default Layout;