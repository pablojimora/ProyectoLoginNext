import React, { useEffect, useState } from 'react'
import { MiButton } from '@/components/button/Button';
// import { notification } from '@/helpers/utils';
import { ToastContainer } from 'react-toastify';
import { MyCard } from '@/components/card/Card';
import { createProperties, deleteProperties, getProperties, getPropertyById, updateProperties } from '@/services/properties';
import { notification } from '@/helpers/utils';
import { dataProperties } from '@/dto';
import { Modal } from '@/components/modal/Modal';





export const InfoDashboard = () => {

    const [dataProperties, setDataProperties] = useState({} as dataProperties); // de esta forma se tipa lo que voy a guardar en dataProperties
    const [dataProperty, setDataProperty] = useState({} as dataProperties); // de esta forma se tipa lo que voy a guardar en dataProperties

    const [nameInput, setnameInput] = useState('');
    const [valueInput, setvalueInput] = useState(0);
    const [imgInput, setimgInput] = useState('');
    const [modoEdicion, setModoEdicion] = useState(false);
    const [idEditando, setIdEditando] = useState<string | null>(null);
    


    console.log(dataProperties);
    console.log(dataProperty);


    // al meterlo en el useEffect hace que se realice a la hora de cargar la pagina 
    useEffect(() => {
        const fetchData = async () => {
            const response = await getProperties();
            setDataProperties(response);
        }
        fetchData()
    }, [])

    const editarAlgo = (id: string) => {
        const fetchData = async () => {
            const response = await getPropertyById(id);
            setDataProperty(response);

            if (response.ok) {
                const property = response.data[0];
                setnameInput(property.name || "");
                setvalueInput(property.value ?? 0);
                setimgInput(property.img || "");
                setModoEdicion(true);     // 🔹 activamos modo edición
                setIdEditando(id);        // 🔹 guardamos el id que estamos editando
            }
        }
        fetchData()

    }

    const eliminarAlgo = (id: string) => {

        deleteProperties(id);
    }

    const handleSave = async () => {
        if (modoEdicion && idEditando) {
            // 🔹 Si estoy editando → PUT
            await updateProperties(idEditando, {
                name: nameInput,
                value: valueInput,
                img: imgInput,
            });
            notification('Registro actualizado con éxito', 'success');
        } else {
            // 🔹 Si no → POST
            await createProperties({
                name: nameInput,
                value: valueInput,
                img: imgInput,
            });
            notification('Registro creado con éxito', 'success');
        }

        // 🔹 Reiniciamos formulario
        setnameInput('');
        setvalueInput(0);
        setimgInput('');
        setModoEdicion(false);
        setIdEditando(null);
    };

    const handleClose=()=>{
        console.log('close')
    }
    const handleSaveModal=()=>{
        console.log('save')
    }


    return (
        <>
            {/* con este div realizo la creacion de registros conectado al post  */}
            <div className='inputs'>
                <h1>Crear un registro</h1>
                <input placeholder='Nombre' value={nameInput} id='name' onChange={(e) => { setnameInput(e.target.value) }} />
                <input placeholder='Número' value={valueInput} type='number' onChange={(e) => { setvalueInput(parseFloat(e.target.value)) }} />
                <input placeholder='Imagen' value={imgInput} onChange={(e) => { setimgInput(e.target.value) }} />

                <MiButton
                    rightIcon={modoEdicion ? '✏️' : '✅'}
                    variant={modoEdicion ? 'secondary' : 'primary'}
                    size='lg'
                    textButton={modoEdicion ? 'Actualizar' : 'Crear'}
                    click={handleSave} />
            </div>

            {dataProperties.ok && (
                <div className='contenedor'>
                    {dataProperties.data.map((property) => (
                        <div key={property._id}>
                            <MyCard
                                titleCard={property.name}
                                type='green'
                                label={`${property.value}`} // de esta forma convierto el valor a un string ya que el label espera string y el value es number
                                imageUrl={property.img}
                                function1={() => { editarAlgo(property._id) }}
                                function2={() => { eliminarAlgo(property._id) }}
                                variant='primary'
                                size='sm' />

                        </div>
                    ))}
                    
                </div>
            )}
            
            {/* <MyCard
            titleCard='dsd'
            type='green'
            label='dsds' // de esta forma convierto el valor a un string ya que el label espera string y el value es number
            variant='primary'
            size='sm' >
                <MiButton
                textButton='Hola'/>
            </MyCard> */}
            <Modal
            title='Modal de prueba'
            onClose={handleClose}
            isOpen={true}
            onConfirm={handleSaveModal}
            
            >
                <div>Contenido del children</div>
            </Modal>


            <ToastContainer />
        </>
    )
}


export default InfoDashboard;