//Los servicios son funciones que consumen la api por medio de AXIOS para poder mostrar la informacion por medio del front 
import axios from 'axios';

export const getProperties = async () =>{
    
    const response = await axios.get('http://localhost:3000/api/properties')

    // console.log(response.data.data)
    
    return response.data
} 

export const createProperties = async (data:{name:string, value:number, img?:string}) =>{
    
    const response = await axios.post('http://localhost:3000/api/properties',data)

    console.log(response)
    
    return response
} 

