import React, { useEffect, useState } from 'react'
import { MiButton } from '@/components/button/Button';
// import { notification } from '@/helpers/utils';
import { ToastContainer } from 'react-toastify';
import { MyBadge } from '@/components/badge/Badge';
import { MyCard } from '@/components/card/Card';
import { MyCardProps } from '@/components/card/Card';
import { createProperties, getProperties } from '@/services/properties';
import { notification } from '@/helpers/utils';
import { text } from 'stream/consumers';



export const InfoDashboard = () => {



    const [dataProperties, setDataProperties] = useState({});
    

    const [ nameInput, setnameInput] = useState('');
    const [ valueInput, setvalueInput] = useState(0);
    const [ imgInput, setimgInput] = useState('');

    console.log(dataProperties);


    // al meterlo en el useEffect hace que se realice a la hora de cargar la pagina 
    useEffect(() => {
        const fetchData = async() => {
            const response = await getProperties();
            setDataProperties(response);
        }
        fetchData()
    }, [])



    const handleSave = () =>{

        createProperties({
            name: nameInput,
            value: valueInput,
            img: imgInput
        })
        notification('Se agrega tarjeta con exito', 'success' )
    }
    return (
        <>
            {/* con este div realizo la creacion de registros conectado al post  */}
                <div className='inputs'>
                    <h1>Crear un registro</h1>
                    <input placeholder='Nombre' onChange={(e)=>{setnameInput(e.target.value)}} />
                    <input placeholder='Número' type='number' onChange={(e)=>{setvalueInput(parseFloat(e.target.value))}} />
                    <input placeholder='Imagen' onChange={(e)=>{setimgInput(e.target.value)}} />
                
                    <MiButton
                    rightIcon='✅'
                    variant='primary'
                    size='lg'
                    textButton='crear'
                    click={handleSave}/>
                </div>

                {dataProperties.ok && (
                <div className='contenedor'>
                {dataProperties.data.map((property)=>(
                    <div key= {property._id}>
                        <MyCard
                        titleCard={property.name}
                        type='green'
                        label={property.value}
                        textButton='Borrar'
                        imageUrl={property.img}/>
                        
                    </div>
                ))}
            </div>
            )}
            {/* aca estamos viendo que el ok del array retorna true,entonces si es true va a ejectutar ese html, por ende va a esperar a validar eso primero antes de mapear */}
            {/* {dataProperties.ok && (
                <div className='contenedor'>
                {dataProperties.data.map((property)=>(
                    <div key= {property._id}>
                        <div>{property.name}</div>
                        <div>{property.value}</div>
                        <img className='img' src={property.img} alt={property.name}  />
                    </div>
                ))}
            </div>
            )} */}
            

            <ToastContainer />
        </>
    )
}


export default InfoDashboard;