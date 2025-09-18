import { useRouter } from 'next/router'
import { useState } from 'react'



const sumar =(prop1:number, prop2:number)=>{
    return prop1 + prop2

}

const multiplicar =(prop1:number, prop2:number)=>{
    return prop1 * prop2

}

const restar =(prop1:number, prop2:number)=>{
    return prop1 - prop2

}

const authenticate = (user:string, password:string) =>{



    if (user == "" || password == ""){
      alert('Debe ingresar usuario y contraseña')
    };
    

    const foundUser = users.find((person)=>person.name === user && person.password === password);
    if (foundUser){
      return true
    //   router.push('/dashboard')
    } else {
      return false
    //   setPassword('');
    //   setUser('');
    //   router.push('/');
    }
}


const users = [
    {name: 'Pablo', password: '24'},
    {name: 'Camilo', password: '24'},
    {name: 'Duqueroso', password: '24'},
    {name: 'Dawinson', password: '24'},
    {name: 'David', password: '24'},
]

export{
    sumar,
    multiplicar,
    restar, 
    users,
    authenticate
}


