import axios from 'axios';

export const getProperties = async () =>{
    
    const response = await axios.get('http://localhost:3000/api/properties')

    // console.log(response.data.data)
    
    return response.data.data
} 

