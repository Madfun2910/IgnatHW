import React from "react";
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            <Navbar/>
        </div>
    );
}

function Navbar() {

    return (
        <div>
            <NavLink className={s.likeLink} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.likeLink} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.likeLink} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
        </div>
    );
}


export default Header;





