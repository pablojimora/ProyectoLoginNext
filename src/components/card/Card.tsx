import { MyBadge, MiBadgeProps } from "../badge/Badge";
import { MiButton, MiButtonProps } from "../button/Button";

import Image from 'next/image'


 export interface MyCardProps extends MiBadgeProps, MiButtonProps {
    titleCard: string;
    imageUrl?:string;
    type: 'green' | 'white' | 'black';
    footer?: React.ReactNode;
}


 export const MyCard = ({titleCard,type,footer, label, status, icon, titleBadge, textButton, click, imageUrl=''}:MyCardProps) =>{
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
                    textButton={textButton}
                    click={click}
                />
                {footer}
            </div>
        </>
    )
}