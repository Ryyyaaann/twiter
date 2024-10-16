import React from "react";
import "../CSS/Navbar.css"
function Navbar (){
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                    <li><a href="/Contato">Contato</a></li>
                    <li><a href="/Perfil">Perfil</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;