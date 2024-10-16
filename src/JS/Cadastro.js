import React from "react";
import "../CSS/Cadastro.css"

function Cadastro(){
    return(
        <main>
            <form>
                <h2>Cadastro</h2>
                <label for="nome">Nome </label>
                <input type="text" placeholder="Nome" required />
                
                <label for="sobrenome">Sobrenome </label>
                <input type="text" placeholder="Sobrenome" required />
                
                <label for="email">Email </label>
                <input type="email" placeholder="Email" required />

                <label for="senha">Senha </label>
                <input type="password" placeholder="Senha" required />

                <button className="cad-buttom" type="submit">Cadastrar</button>


            </form>

        </main>
    )

}

export default Cadastro;