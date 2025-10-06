import { MyBadge, MiBadgeProps } from "../badge/Badge";
import { MiButton, MiButtonProps } from "../button/Button";

import Image from 'next/image'


 export interface MyCardProps extends MiBadgeProps, MiButtonProps {
    titleCard: string;
    imageUrl?:string;
    type: 'green' | 'white' | 'black';
    footer?: React.ReactNode;
    function1?: ()=>void;
    function2?: ()=>void;
}


 export const MyCard = ({titleCard,type,footer, label, status, icon, titleBadge, imageUrl='', variant, size, function1, function2}:MyCardProps) =>{
    return(
        <>
            <div className={`card card--${type}`}>
                <MyBadge
                    label={label}
                    status={status}
                    icon={icon}
                    titleBadge={titleBadge}
                />{titleCard}
                <Image
                    src= {imageUrl}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                    />
                <MiButton
                    textButton='Editar'
                    click={function1}
                    variant={variant}
                    size={size}
                />
                <MiButton
                    textButton='Eliminar'
                    click={function2}
                    variant={variant}
                    size={size}
                />
                
                {footer}
            </div>
        </>
    )
}