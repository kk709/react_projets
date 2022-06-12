import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [newNote, setNewNote] = useState([]);

  const addNote = (note) => {
    // alert("i am clicket");
    setNewNote((preData)=>{
      return [...preData, note];
    });
  };
  const deleteNote = (id) => {
    setNewNote((oldData) => 
    oldData.filter((currVal, index)=>{
      return index !== id
    })
    );
  };
  return(
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      
    {  newNote.map((val, index)=>{
        return <Note 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={deleteNote}

        />
      })}
      <Footer />
    </>
  );
}
export default App;