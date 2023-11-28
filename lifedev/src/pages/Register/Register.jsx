import { useState, useEffect } from 'react';
import React from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';


const Register = () => {
  const [displayname, setDisplayname] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = useAuthentication()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = {
      displayname,
      email,
      senha
    }

    if (senha != confirmaSenha) {
      setError("As senhas precisão ser iguais!!!")
    }

    const res = await createUser(user)

    console.log(res)

  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div>
      <h1>Cadastro de LifeDeveloper</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text" 
          name="displayname"
          required
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
          placeholder='Digite seu nome de usuário'
          />
        </label>
        <label>
          <span>Email:</span>
          <input 
          type="email" 
          name="emailUsuario" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Entre com seu email'
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          type="password" 
          name="senha" 
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder='Entre com uma senha segura'
          />
        </label>
        <label>
          <span>Confirmação:</span>
          <input 
          type="password" 
          name="confirmacaoUsuario" 
          required
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          placeholder='Confirme sua senha'
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn'>Aguarde</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register