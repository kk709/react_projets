import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const delteIt = () => {
        props.deleteItem(props.id);
    };
    return(
        <>
            <div className='note'>
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className='btn'>
                    <DeleteOutlineIcon className='deleteIcon' onClick={delteIt} />
                </button>
            </div>
        </>
    );
}
export default Note;