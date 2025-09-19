// import { useState } from 'react'
import { sumar, multiplicar, users } from '../../helpers/utils'
import toUpperCaseLetters, { toLowerCaseLetters } from '../../helpers/capitalizar'
import { CC, Car } from '@/dto'
import { useRouter } from 'next/router'

export const Dashboard = () => {

    const router = useRouter();

    console.log(router)

    if (router.route== "/dashboard"){

    }

    const goToBack=()=>{
        router.back()
    }

    const car1:Car ={
        motor: 'Kumis',
        color: 'rojo',
        marca: 'chevrolet',
        cc: 1211
    }

    const {} = car1

    const a = 2;
    const b = 10;
    const palabra = 'Palabra'

    const result = sumar(a, b);
    const result2 = multiplicar(a, b);
    const result3 = toUpperCaseLetters(palabra);
    const result4 = toLowerCaseLetters(palabra);
    const cedula:CC= 47454


    console.log(result)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    console.log(cedula)


    return (
        <>
            <h1 className='div'>Bienvenido estos son los usuarios y las contraseñas de la pagina</h1>
            {
                users?.map((user, index) => (
                    <div key={index}>
                        <div className='div'>{user.name}</div>
                        <div className='div'>{user.password}</div>


                    </div>

                ))
            }

            <button onClick={()=>{goToBack()}}>Regresar</button>

        </>
    )
}

export default Dashboard