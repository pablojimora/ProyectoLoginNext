//Los servicios son funciones que consumen la api por medio de AXIOS para poder mostrar la informacion por medio del front 
import axios from 'axios';

export const getProperties = async () =>{
    
    const response = await axios.get('http://localhost:3000/api/properties')

    // console.log(response.data.data)
    
    return response.data
} 

export const getPropertyById = async (id:string) =>{
    
    const response = await axios.get(`http://localhost:3000/api/properties?id=${id}`)

    console.log(response.data)
    
    return response.data
}

export const createProperties = async (data:{name:string, value:number, img?:string}) =>{
    
    const response = await axios.post('http://localhost:3000/api/properties',data)

    console.log(response)
    
    return response.data
} 

export const updateProperties = async (id:string, data:{ name:string, value:number, img?:string}) =>{
    
    const response = await axios.put(`http://localhost:3000/api/properties?id=${id}`,data)

    console.log(response)

    return response
}

export const deleteProperties = async (id:string) =>{
    
    const response = await axios.delete(`http://localhost:3000/api/properties?id=${id}`)

    console.log(response)

    return response
}