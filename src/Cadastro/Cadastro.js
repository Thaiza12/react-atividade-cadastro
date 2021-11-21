import React from "react";
import "./Cadastro.css";


export default function Cadastro (){

    function mostrarMensagem(){
        alert("O nome do usuário e/ou senha está inválido.")
    }


    return(
    <div>

        <form className="form">

        <h1>Cadastro</h1>
        <p> Preencha os dados para continuar</p>


            <div className="nome">
                <input type="texto" name="username" placeholder="Nome"/>
            </div>
            <div className="sobrenome">
                <input type="texto" name="username" placeholder="Sobrenome"/>
            </div>
            <div className="email">
                <input type="texto" name="username" placeholder="E-mail"/>
            </div>
            <div className="senha">
                <input type="password" name="Senha"  placeholder="Senha"/>
                </div>
                <button className="botao" onClick={()=>mostrarMensagem()}>Concluir Cadastro</button>
               
        </form>
    </div>
    );
}