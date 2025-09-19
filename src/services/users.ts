class userServices {
    url:string='http://localhost:3000'

    // constructor{

    // }

    async getUsers(){
        const result = await fetch(`${this.url}/api/users`);
    
        return result;
    }

    async getUserByName(){
        const result = await fetch(`${this.url}/api/users`);

        return result;
    }

    async postUsers() {
    const result = await fetch(`${this.url}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({
      name: "Nuevo Usuario",
      age: 25,
    }),
  });

  return result;
}



}

export {userServices}