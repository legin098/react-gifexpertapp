import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    return (
        //no se usa la plabra class porque es reservada de javaScript, para poner clases de html se usa className
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
