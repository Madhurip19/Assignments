
async function fetchCharacters() {
    try {
        const response = await fetch('characters.json');
        if (!response.ok) throw new Error('Failed to fetch characters');
        
        const characters = await response.json();
        displayCharacters(characters);
    } catch (error) {
        document.getElementById('characters-list').innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

function displayCharacters(characters) {
    const charactersList = document.getElementById('characters-list');
    charactersList.innerHTML = characters.map(character => `
        <div>
            <h3>${character.name}</h3>
            <p>${character.email}</p>
        </div>
    `).join('');
}

window.onload = fetchCharacters;
