import { useRouter } from 'next/router'
import { userServices } from "@/services/users";
import { useState } from "react";

export const Dashboard = () => {
const [userlist, setUserList] = useState([]);
  
 const router = useRouter();

    console.log(router)

    if (router.route== "/dashboard"){

    }

    const goToBack=()=>{
        router.back()
    }
const handleClick = async () => {

    
  console.log("Hola mundo desde el front");

  const userClass = new userServices();

    //forma 1
  const users = userClass.getUsers();

  users 
    .then((data)=> data.json())
    .then((response) => {
    setUserList(response.users);
    });
    // forma 2
//   try {
//     const res = await userClass.getUsers();
//     const data = await res.json();
//     console.log(data); // 👈 aquí ya tienes el objeto directamente
//   } catch (error) {
//     console.error("Error al obtener usuarios:", error);
//   }
};

const btnDelete = async () => {
    
}

  return (
    <div>
      <h1>Hola Mundo</h1>
        
      <button onClick={handleClick} >Ingresar</button> 

      <div>
        {//se ponen parentesis despues de la flecha porque vamos a retornar html
            userlist.map((item, index)=>(
                 // el sirve para evitar fallos en el renderizado y que quede bien pósicioanda la lista
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                </div>
                
            ))
        }
      </div>
      <button onClick={goToBack}>Atras</button>

    </div>
  )
}
   

export default Dashboard





