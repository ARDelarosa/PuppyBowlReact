import React, { useState } from "react";
import { createPlayer } from '../api'

function NewPlayerForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPlayer = {
                name,
                breed,
                status,
                imageUrl,
            };
            const createdPlayer = await createPlayer(newPlayer);
            console.log('Created player:', createdPlayer);
            setMessage(`Player ${createdPlayer.name} created successfully!`);
            // Next part clears the form.
            setName('');
            setBreed('');
            setStatus('');
            setImageUrl('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Create New Player</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />
                <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                <button type="submit">Create Player</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default NewPlayerForm;