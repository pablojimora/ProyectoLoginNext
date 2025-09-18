




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

export{
    sumar,
    multiplicar,
    restar, 
    users,
    authenticate,
    UserStore
}


