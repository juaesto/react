import React from 'react'

const Note = ({ note, hacerImportante }) => {
    const label = note.important
        ? 'es importante hacerlo'
        : 'no es importante hacerlo';

    return (
        <li className='note'>
            {note.content}
            <div>
                <button onClick={hacerImportante}>{label}</button>
            </div>
        </li>
    )
}

export default Note