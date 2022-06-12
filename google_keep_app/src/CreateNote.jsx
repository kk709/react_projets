import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {

        const {name , value} = event.target;
        setNote((preVal) =>{
            return{
                ...preVal,
                [name]:value,
            };

        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };
    const expanIt = () => {
        setExpand(true);
    };
    const btNormal = () => {
        setExpand(false);
    };
    return(
        <>
            <div className='main_note' onDoubleClick={btNormal}>
                <form>
                    {expand?
                    <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />: null}
                    <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} onClick={expanIt} placeholder='write Note...'></textarea>
                    {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>: null}
                </form>
            </div>
        </>
    );
}
export default CreateNote;