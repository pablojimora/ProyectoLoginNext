import { MyContext } from '@/context/Context';
import { notification } from '@/helpers/utils';
import { Switch } from '@heroui/react';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

export const Database = () => {


    const [inputName, setInputName] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const { setUserLogged, isSelected, setIsSelected} = useContext(MyContext);

    const router = useRouter();

    const onChangeName = () =>{
        if(inputName==='pablo' && inputPassword==='admin'){
            notification('Login correcto', 'success');
            setUserLogged?.({name: `${inputName}`});
            router.push('/dashboard');
        }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className='max-w-3/6'>
            <h1>Login</h1>

            <label >User</label>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />

            <label >Password</label>
            <input type="password"  onChange={(e) => setInputPassword(e.target.value)}/>

            <button onClick= {onChangeName}>Enviar</button>
            <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                Airplane mode
            </Switch>

        </div>
    </div>
  )
}

export default Database;
