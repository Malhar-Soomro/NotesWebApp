import { Grid, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:5000/notes";
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log("parsed Data", parsedData);
        setNotes(parsedData);
        console.log("notes->", notes);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (

        <div>
            <Grid container>
                {notes.map(note => (
                    <Grid key={note.id} item lg={4} md={6} sm={12}>
                        <Paper>{note.title}</Paper>
                    </Grid>
                ))}
            </Grid>
            {/* {notes.map(note => (
                <p key={note.id} >{note.title}, {note.detail}</p>
            ))} */}
        </div>
    )
}

export default NotesPage
