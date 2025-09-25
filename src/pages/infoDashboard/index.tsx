import React from 'react'
import { MiButton } from '@/components/button/Button';
import { notification } from '@/helpers/utils';
import { ToastContainer } from 'react-toastify';
import { MyBadge } from '@/components/badge/Badge';
import { MyCard } from '@/components/card/Card';

export const infoDashboard = () => {

    const prueba = () => {
        console.log('hola')
    }
    return (
        <>
            <MyCard
                type="green"
                titleCard="Servidor Activo"
                footer={<button className="components__button primary">Acceder</button>}
                label="Online"
                status="success"
                icon={<span>✅</span>}
                titleBadge="El servidor está funcionando sin problemas"
            />

            <MyCard
                type="white"
                titleCard="Configuración Pendiente"
                footer={<button className="components__button secondary">Revisar</button>}
                label="Pendiente"
                status="warning"
                icon={<span>⚠️</span>}
                titleBadge="Se requiere configuración adicional"
            />

            <MyCard
                type="black"
                titleCard="Error Crítico"
                footer={<button className="components__button danger">Reintentar</button>}
                label="Caído"
                status="error"
                icon={<span>❌</span>}
                titleBadge="El sistema no responde"
            />

            <MiButton
                size='lg'
                variant="danger"
                text="Ambos Iconos"
                leftIcon={<span>⚠️</span>}
                rightIcon={<span>❌</span>}
                click={prueba}

            // click={()=>notification("Cuidado, ¿puedes manjear dos iconos? jaj", "error")}
            />
            <MiButton
                size='lg'
                variant="primary"
                text="Ambos Iconos"
                leftIcon={<span>⚠️</span>}
                rightIcon={<span>❌</span>}
                click={() => notification("Prueba", "error")}

            // click={()=>notification("Cuidado, ¿puedes manjear dos iconos? jaj", "error")}
            />
            <MiButton
                size='lg'
                variant="danger"
                text="Ambos Iconos"
                leftIcon={<span>⚠️</span>}
                rightIcon={<span>❌</span>}
                click={() => notification("Cuidado, ¿puedes manjear dos iconos? jaj", "error")}
                disabled
            />
            <MyBadge
                label="Operación exitosa"
                status="success"
                icon={<span>✅</span>}
                titleBadge="La acción se completó correctamente"
            />

            <MyBadge
                label="Advertencia"
                status="warning"
                icon={<span>⚠️</span>}
                titleBadge="Atención: revisa la configuración"
            />

            <MyBadge
                label="Información disponible"
                status="info"
                icon={<span>ℹ️</span>}
                titleBadge="Más detalles al hacer clic en el icono"
            />

            <MyBadge
                label="Error crítico"
                status="error"
                icon={<span>❌</span>}
                titleBadge="La operación ha fallado por un problema interno"
            />

            <MyBadge
                label="En espera"
                status="neutral"
                icon={<span>⏳</span>}
                titleBadge="Esperando confirmación del usuario"
            />

            <ToastContainer />
        </>
    )
}


export default infoDashboard;