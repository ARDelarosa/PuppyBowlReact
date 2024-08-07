export async function fetchAllPlayers() {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2404-FTBMT-WEB-PT/players');
    if (!response.ok) {
        throw new Error('Failed to fetch players');
    }
    const result = await response.json();
    const data = result.data;
    const players = data.players;
    return players;
}   

export async function fetchPlayerById(id) {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2404-FTBMT-WEB-PT/players/${id}`);
    const result = await response.json();
    const data = result.data;
    if (!response.ok) {
        throw new Error(`Failed to fetch player with ID ${id}`);
    }
    return data;
}

export async function createPlayer(player) {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2404-FTBMT-WEB-PT/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
    });
    const result = await response.json();
    const data = result;
    console.log('Response data:', data)
    if (!response.ok || !data.success) {
        throw new Error('Failed to create player');
    }
    return result.data;

}

export async function deletePlayer(id) {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2404-FTBMT-WEB-PT/players/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    const data = result.data;
    if (!response.ok) {
        throw new Error(`Failed to delete player with ID ${id}`);
    }
    return data;
}