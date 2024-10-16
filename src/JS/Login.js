import React from "react";
import "../CSS/Login.css"

function Login (){
    return(
        <main>
            <form>
                <h2>Login</h2>
                <label for="email">Email </label>
                <input type="email" placeholder="Email" required />

                <label for="senha">Senha </label>
                <input type="password" placeholder="Senha" required />

                <button className="log-buttom" type="submit">Login</button>


            </form>

        </main>
    )

}

export default Login;