export type CC = number;

export interface Car{
    motor: string, 
    color: string,
    marca:string,
    cc:number
}

export interface User {
    name:string,
    password:string,
    address?:string,
    cc?:CC;
}
