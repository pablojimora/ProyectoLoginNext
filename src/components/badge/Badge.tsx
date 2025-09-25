

export interface MiBadgeProps {
   label: string;
   status?:"success" | "warning" | "info" | "error" | "neutral";
   icon?:React.ReactNode;
   titleBadge?: string;
}


export const MyBadge = ({label, status, icon, titleBadge}:MiBadgeProps) =>{
   return (
      <div className={`badge badge--${status}`} title={titleBadge}>
         {icon && <span className="badge__icon">{icon}</span>}
         <span className="badge__label">{label}</span>
    </div>
   )
}