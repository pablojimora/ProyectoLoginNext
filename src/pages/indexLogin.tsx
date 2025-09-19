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
      router.push('/dashboard')
    } else {
      alert('Usuario o contraseña incorrectos');
      setUser('');
      setPassword('')
    }
  
  }
  return (
    <div>
      <h1 className="h1">Mi app</h1>

      <h3> Ingresa usuario y contraseña </h3>
      

      <label >Ingresa tu usuario    </label>
      {/* cada vez qeu haga un cambio va a llamar la funcion handleCHageUSer */}
      <input  value={user} onChange={handleChangeUser} type="text"/>
      <label>Ingresa tu contraseña</label>
      <input onChange={handlePasswordUser} type="password"/>

      <button onClick={handleClick}>Ingresar</button> 

    </div>
  )
}

export default Login