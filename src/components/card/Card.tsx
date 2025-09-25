import { MyBadge, MiBadgeProps } from "../badge/Badge";
import Image from 'next/image'


interface MyCardProps extends MiBadgeProps{
    titleCard: string;
    imageUrl?:string;
    type: 'green' | 'white' | 'black';
    footer?: React.ReactNode;
}

 export const MyCard = ({titleCard,type,footer, label, status, icon, titleBadge}:MyCardProps) =>{
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
                    src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAb1BMVEUAAAD///84ODgyMjIrKytkZGTExMT09PTBwcAlJST39/dsbGwYGBjw8PB4eHc7OzsLCwqmpqaHh4efn5+BgYHq6uoWFhYgICCOjo7Ozs5TU1NJSUnKyspBQUG4uLgRERGZmZnY2NhcXFyysrLj4+MJkNPxAAAD9ElEQVR4nO3a63aiMBSG4ahoq1ap9dR6qDrt/V/jEHaCERIEWq2s9T5/ZrABzSduwlalAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADArcVdLQ4POHR7Qd2VjIl6kTb07L5avySG6+vHevn9yTXUEYPggHGnxJuM2ZrNcWHvo/xhtL5+rPebzK8J+4qOoQH9snkszCA72X1g5+3lsLJ8H0D2kv4FBlTKRM1ke3m5b2SGTc122zLpdP0DqmWidvLAx8W+3/LgzG63LpNv/4DSTJx5TOSRubPrIJ9Ty+pJJ1RnJZO3XtcjXp/HxeYo5zpr6utklT2yirNdh+mJ9bT1HuuPue/U0TdAMpn6/nTJngT2M9jPbec8p5k8ThAOOUNO+ff4rHImai4HMXU2HnVK95RMfEuaP5e+7mclExj1igOqZ6I+JIVdurGUjVlo8KNnMlAb89kvDqiRiZuD9zrkevxM1Jv7HrvqZLLP6uwxmLHVgkzUZ6DO1skkq7MmYbt+9WlDJipQZ2tlYutsp7y+aq3IZPgkE8nVWclk3h/n9P3H2zmRBOur1opMbJ3N3bOE1rEj//EOy2zEqfSJ25GJWvjqbCiTp8ABe3bAMjDAaEkmts669yy1M8nqrG8B6GhLJuok03FrRe1MAn2DvNZk8moW5E4vUjIZFZRMeffTerLuRfKfeLONqs/lt1xmYuus0zeQTBbqJWflOVjiWS9Jrq3r04Elmcw6k9fkn/f0OIO7p5LLRL3LdM51tu76RJ8/XfP5aro+kUz0Z1CnMgnEfzP5TNRXrs7WXsfuVLg/67iayVYOlTz/V7Un/zWFTGydtZeN+vc7R5WtZxve76SZLMytwez095msTZ01vaAG98Ublesb+FzNZPpn7chiJrm+Qf3+ifQHftI/kXqS3Guc3ko+fTfjycT2DWRutftsJkvbN2jSZ5NMumnbfzm7d4n1ZnKxnq3dj93ntj29O63CtVj1v9Lrzr0Xdt5MbJ3VSTTv29vz5uB94iqZJA7zsmbdbfgzsX2DuPb3O279KO0/Xs3k31i+mkxO2ubTa8SfidM3qPc94MV6/rWszvozWT59Kh3Dtz5X5ZZq8CiZ2L7Bx4++L7Z9A181KmSy0CdUEu14nTxlkkxyLT5tevsv/bXCfYUyyerspkomtp7m+6+hx5Unk5Muz+ZqNYnOr6CzvPcNjzkbPE7yiuwr88r9/qR4Ppg6Oyp+3ycfNme603SBt0+yGn3K8Kle8HzP/TX6hoaa/ydC6W+PojgqYZYO3fR74Nh31Y3SHyHFxbd6nR7gF2cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+4j/BWyqvBJ1VKQAAAABJRU5ErkJggg=='
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    />
                {footer}
            </div>
        </>
    )
}