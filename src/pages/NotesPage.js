import React, { useEffect } from 'react'

const NotesPage = () => {
    const fetchData = async () => {
        const url = "http://localhost:5000/notes";
        const data = await fetch(url);
        const parsedData = await data.json();
        console.log(parsedData[0].title);
        console.log(parsedData[0].detail);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>

        </div>
    )
}

export default NotesPage
