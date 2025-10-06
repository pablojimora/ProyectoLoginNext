import { useRouter } from 'next/router'
// import Dashboard from './dashboard';
import{ authenticate, UserStore }from '../helpers/utils'
import {  useState } from 'react';
// import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints';
// Se inicia en mayuscula cuando es un componente, es una funcion, un componente siempre retorna html
const Login = () => {
  

    const [user,setUser] = useState("nombre inicial");
  const [password, setPassword] = useState(" ");


  console.log(user)
  const router = useRouter();
  console.log(router)
  const handlePasswordUser= (e:React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
} 
const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
  setUser(e.target.value);

}

  const store = new UserStore();

  const usuario = store.createUser();
  console.log(usuario);

  

  const handleClick = () =>{
    const isLogin =  authenticate(user, password);
    if (isLogin) {
      router.push('/infoDashboard')
    } else {
      alert('Usuario o contraseña incorrectos');
      setUser('');
      setPassword('')
    }
  
  }
  return (
  <div className="login-container">
    <h1 className="title">Next App</h1>
    <h3 className="subtitle">Ingresa usuario y contraseña</h3>

    <div className="form-group">
      <label>Usuario: </label>
      <input
        value={user}
        onChange={handleChangeUser}
        type="text"
        placeholder="Tu usuario"
      />
    </div>

    <div className="form-group">
      <label>Contraseña: </label>
      <input
        value={password}
        onChange={handlePasswordUser}
        type="password"
        placeholder="Tu contraseña"
      />
    </div>

    <button className="btn" onClick={handleClick}>
      Ingresar
    </button>
  </div>
);
}

export default Login