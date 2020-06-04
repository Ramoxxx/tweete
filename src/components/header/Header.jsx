import React from "react"

import "./Header.css"


export default function Header(props){
    return(
        <div className="Header">
            <div className="Logo">TweeTe</div>
            <input type="text" name="search" id="search"/>
        </div>
    )
}