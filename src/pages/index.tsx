import { useRouter } from 'next/router'
// import Dashboard from './dashboard';
import{ users }from '../helpers/utils'
import {  useState } from 'react';
// import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints';
// Se inicia en mayuscula cuando es un componente, es una funcion, un componente siempre retorna html
const Login = () => {
  

  const [user,setUser] = useState("nombre inicial");
  const [password, setPassword] = useState(" ");

  const handlePasswordUser= (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  } 
  console.log(password)

  const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);

  } 

  console.log(user)
  const router = useRouter();
  console.log(router)

  const handleClick = () =>{

    if (user == "" || password == ""){
      alert('Debe ingresar usuario y contraseña')
    };
    

    const foundUser = users.find((person)=>person.name === user && person.password === password);
    if (foundUser){
      alert('Usuario encontrado')
      router.push('/dashboard')
    } else {
      alert('Usuario o contraseña incorrectos');
      setPassword('');
      setUser('');
      router.push('/');
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