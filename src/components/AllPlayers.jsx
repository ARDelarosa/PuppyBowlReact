import React, { useState, useEffect} from 'react';
import { fetchAllPlayers } from '../api';
import { useNavigate } from 'react-router-dom';

function Allplayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

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
    };

    const handleCreatePlayer =() => {
        navigate('/new-player');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    return (
        <div className="allplayers">
            <h1>Puppy Bowl</h1>
            <button onClick={handleCreatePlayer}>Create Player</button>
            <input
                type="text"
                placeholder="Search players..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-bar"
            />
            <ul>
                {filteredPlayers.map(player => (
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