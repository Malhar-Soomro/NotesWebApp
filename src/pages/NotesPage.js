import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard';

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
        <Container>
            <Grid container >
                {
                    notes.map(note => {
                        return (
                            <Grid key={note.id} item lg={4} md={6}>
                                <NoteCard
                                    title={note.title}
                                    category={note.category}
                                    detail={note.detail}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>

            {/* {
                notes.map(note => {
                    return (
                        <p>{note.title}, {note.detail}</p>
                    )
                })
            } */}
        </Container>
    )
}

export default NotesPage;
