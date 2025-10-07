import { createContext } from "react";


export interface UserLog{
    name?: string;
    role?: string;
    isActive?: boolean;
    date?: string;  
}
export type contextProps = {
    userLogged?: UserLog;
    setUserLogged?: (userLogged: UserLog) => void;
    isSelected?: boolean;
    setIsSelected?: (isSelected: boolean) => void;
}


export const MyContext = createContext<contextProps>({} as contextProps);
