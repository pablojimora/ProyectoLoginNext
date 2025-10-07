import { Bounce, toast } from "react-toastify"





export const sum=(a:number, b:number)=> a+b;

export const isEven = (n:number) => n%2 === 0;

export const calculateIVA = (value:number) => {
    return value * 0.19
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


class UserStore {

  
    
    listUser() {
        console.log('Se estan listando los usuarios: GET');        
    };
    
    findUserByName() {
        console.log('Se encuentra usuario por nombre po rmedio con un get(name)')
    };
    @addUserMetadata
    createUser() {
        return {name:'sdf'}
    };
    
    updateUser() {
        console.log('Se actualiza usuario')
    };
    
    removeUser() {
        console.log('Se elimina usuario')
    }; 


}

function addUserMetadata(_target: object,_propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value; // TypeScript ya lo ve como Function | undefined

  descriptor.value = function (...args: unknown[]) {
    // Como descriptor.value podría ser undefined, TS pide check
    const result = original && original.apply(this, args);
    return {
      ...result,
      role: "user",
      createdAt: new Date(),
    };
  };

  return descriptor;
}


export const notification = (text: string, type: 'error' | 'success', time?: number) => {
    // console.log("EL texto es " , text);
    // console.log("EL tipo es " , type);
    if (type === 'success') {
        toast.success(`${text}`, {
            position: "bottom-right",
            autoClose: time || 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
        if (type === 'error') {
            toast.error(`${text}`, {
                position: "top-right",
                autoClose: time || 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

export{
    multiplicar,
    restar, 
    users,
    authenticate,
    UserStore
}


