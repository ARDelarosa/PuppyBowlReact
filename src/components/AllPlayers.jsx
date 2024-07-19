import React, { useState, useEffect} from 'react';
import { fetchAllPlayers } from '../api';
import { useNavigate } from 'react-router-dom';

function Allplayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPlayers() {
            try {
                const playersData = await fetchAllPlayers();
                setPlayers(playersData);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        }
        getPlayers();
    }, []);

    const handleNavigate = (id) => {
        navigate(`/players/${id}`);
    }

    return (
        <div className="allplayers">
            <h1>All Players</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        <img src={player.imageUrl} alt={player.name} width="100" height="100" /> {/* Display player image */}
                        <p>{player.name}</p>
                        <button onClick={() => handleNavigate(player.id)}>
                            View Details
                        </button>
                    </li>  
                ))}
            </ul>
        </div>
    );
}

export default Allplayers;