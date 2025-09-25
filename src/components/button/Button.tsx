// import { JSX } from "react";


interface MiButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    click?: ()=>void;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    text: string
}

export const MiButton = ({variant, size, disabled= false, loading=false, click,leftIcon, rightIcon, text}:MiButtonProps) => {

    return (
        <button
        className={`components__button 
            ${disabled ? "disabled" : 
            variant === "primary" ? "primary" :
            variant === "secondary" ? "secondary" :
            variant === "danger" ? "danger" : ""}
            ${size === "sm" ? "small" :
            size === "md" ? "middle" :
            size === "lg" ? "large" : "md"}`
  }
        disabled= {disabled || loading}
        onClick={click}
        >
           {leftIcon} {loading? 'Cargando...' : text} {rightIcon} 
        </button>
    )
}