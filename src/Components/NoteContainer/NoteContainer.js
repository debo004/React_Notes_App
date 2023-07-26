import React from 'react'
import Notes from '../Notes/Notes'
import "./NoteContainer.css";

export default function NoteContainer(props) {

    const reverseArray = (arr) => {
        const array = [];

        for (let i=arr.length-1; i>=0; --i) {
            array.push(arr[i]);
        }

        return array;
    };

    const notes = reverseArray(props.notes);

    return (
        <div className='note_container'>
            <h2>Take Your Notes</h2>
            <div className='note_container_notes custom-scroll'>
                {
                    notes ?.length > 0 ? (notes.map((item) => (
                    <Notes key = {item.id} note = {item} 
                    deleteNote = {props.deleteNote} updateText = {props.updateText}
                    />
                    ))) : (<div>
                        <h3>No Current Notes to Show !</h3> 
                        <h3>Click the Plus Icon to Create Your Note . . . </h3>
                    </div>)
                }
            </div>
        </div>
    )
}
