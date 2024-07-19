import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "../api";

function SinglePlayer() {
    const {id} = useParams();

    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPlayer() {
            try {
                const playerData = await fetchPlayerById(id);
                console.log(playerData)
                setPlayer(playerData.player);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getPlayer();
    }, [id]);

    if(loading) {
        return <div>Loading...</div>;
    } if(error) {
        return <div>Error: {error}</div>
    }

    return (
        <div id="singleplayer">
            <h1>Player Details</h1>
            {player && (
                <div>
                    <img src={player.imageUrl} alt={player.name} width="200" height="200" />
                    <h2>{player.name}</h2>
                    <p>Breed: {player.breed}</p>
                    <p>Status: {player.status}</p>
                </div>
            )}
        </div>
    );
}

export default SinglePlayer;