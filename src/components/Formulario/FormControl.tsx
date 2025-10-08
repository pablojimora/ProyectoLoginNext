import { MyContext } from '@/context/Context';
import React, {useContext, useState} from 'react'
import {Form} from "@heroui/form";
import { Button, Input } from '@heroui/react';


interface FormProps {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    codigoPostal?: string;
    telefono: string;
    direccion?: string;
    ciudad?: string;
    pais?: string;
    profesion?: string;
}


const FormularioUsuario= () => {
    
    const {visibleForm, setVisibleForm} = useContext(MyContext)
    
    const [formData, setFormData] = useState<FormProps>({
        nombre: '',
        apellido: '',
        edad: 14,
        email: '',
        codigoPostal: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        pais: '',
        profesion: ''
    });
    
    
    const [errors, setErrors] = useState<string[]>([]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    const validateForm = (): string[] => {
        
        if (!formData.nombre) errors.push('El nombre es obligatorio.');
        if (!formData.apellido) errors.push('El apellido es obligatorio.');
        if (formData.edad < 14 || formData.edad > 100) errors.push('La edad debe estar entre 14 y 100 años.');
        if (!formData.email) errors.push('El email es obligatorio.');
        if(!formData.email.includes('@')) errors.push('El email debe ser válido.');
        if(!formData.telefono && formData.telefono.length < 10) errors.push('El teléfono debe tener al menos 10 dígitos.');
        if(formData.direccion && formData.direccion.length < 5) errors.push('La dirección debe tener al menos 5 caracteres.');
        if(formData.ciudad && formData.ciudad.length < 3) errors.push('La ciudad debe tener al menos 3 caracteres.');
        if(formData.pais && formData.pais.length < 3) errors.push('El país debe tener al menos 3 caracteres.');
        if(formData.profesion && formData.profesion.length < 3) errors.push('La profesión debe tener al menos 3 caracteres.');

        return errors;
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors([]);
            // Aquí iría la lógica para enviar los datos del formulario
            setVisibleForm(!visibleForm)   
            console.log('Formulario enviado:', formData);
        }
    }
        
        return (
            <Form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-4">
                <div>
                    <Input label='Nombre' type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div>
                    <Input label='Apellido' type="text" name="apellido" value={formData.apellido} onChange={handleChange} required/>
                </div>
                <div>
                    <Input label='Edad' type="text" name="edad" value={`${formData.edad}`} onChange={handleChange} required/>
                </div>
                <div>
                    <Input label='Email' type="text" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <Input label='Teléfono' type="text" name="telefono" value={formData.telefono} onChange={handleChange} required/>
                </div>
                <div>
                    <Input label='Codigo Postal' type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange}/>
                </div>
                <div>
                    <Input label='Dirección' type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
                </div>
                <div>
                    <Input label='Ciudad' type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} />
                </div>
                <div>
                    <Input label='País' type="text" name="pais" value={formData.pais} onChange={handleChange} />
                </div>
                <div>
                    <Input label='Profesión' type="text" name="profesion" value={formData.profesion} onChange={handleChange} />
                </div>

                <Button type='submit'>Enviar</Button>
                {errors.length>0 && (
                    <ul>
                        {errors.map((error,index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}
                
            </Form>
  )
  
}


export default FormularioUsuario;