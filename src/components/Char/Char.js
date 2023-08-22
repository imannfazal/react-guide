import React from 'react'

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
    }
    return (
        <button type='button' onClick={props.click} style={style}>
            {props.character}
        </button>
    )
}

export default Char