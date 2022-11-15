import React from 'react'
import { Link } from 'react-router-dom'
export default function LayoutHeader(props) {

    return (
        <div className='layoutheader'>
            <h1>Dancyclopedia</h1>
            {props.forms}
        </div>
    )
}
