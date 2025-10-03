import { useRouter } from 'next/router'
// import Dashboard from './dashboard';
import { authenticate, UserStore } from '../helpers/utils'
import { useState } from 'react';
// import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints';
// Se inicia en mayuscula cuando es un componente, es una funcion, un componente siempre retorna html
const Login = () => {


  const [user, setUser] = useState("nombre inicial");
  const [password, setPassword] = useState(" ");


  console.log(user)
  const router = useRouter();
  console.log(router)
  const handlePasswordUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);

  }

  const store = new UserStore();

  const usuario = store.createUser();
  console.log(usuario);



  const handleClick = () => {
    const isLogin = authenticate(user, password);
    if (isLogin) {
      router.push('/infoDashboard')
    } else {
      alert('Usuario o contraseña incorrectos');
      setUser('');
      setPassword('')
    }

  }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Next Js</h1>
        <h3 className="text-center text-gray-500 mb-8">Enter your data for login</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Username
          </label>
          <input
            value={user}
            onChange={handleChangeUser}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            onChange={handlePasswordUser}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Ingresar
        </button>
      </div>
    </div>

  )
}

export default Login