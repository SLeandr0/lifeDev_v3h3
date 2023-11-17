import { useState } from 'react'
import React from 'react';


const Register = () => {
  const [displayname, setDisplayname] = useState('')
  const [emailUsuario, setEmailUsuario] = useState('')
  const [senhaUsuario, setSenhaUsuario] = useState('')
  const [confirmacaoUsuario, setonfirmacaoUsuario] = useState('')
  const [erro, setErro] = useState('')

  return (
    <div>
      <h1>Cadastro de LifeDeveloper</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayname" placeholder='Digite seu nome de usuário' required />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="emailUsuario" placeholder='Entre com seu email' required />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="senhaUsuario" placeholder='Entre com uma senha segura' required />
        </label>
        <label>
          <span>Confirmação:</span>
          <input type="password" name="confirmacaoUsuario" placeholder='Confirme sua senha' required />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>

  )
}

export default Register