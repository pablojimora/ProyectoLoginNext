export interface propertyProps {
  _id:string
  name: string,
  value: number,
  img: string
}


export interface dataProperties {
  ok :boolean,
  data: propertyProps[]
}

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
