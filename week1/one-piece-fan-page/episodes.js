
async function fetchEpisodes() {
    try {
        const response = await fetch('episodes.json');
        if (!response.ok) throw new Error('Failed to fetch episodes');
        
        const episodes = await response.json();
        displayEpisodes(episodes);
    } catch (error) {
        document.getElementById('episodes-list').innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

function displayEpisodes(episodes) {
    const episodesList = document.getElementById('episodes-list');
    episodesList.innerHTML = episodes.slice(0, 5).map(episode => `
        <div>
            <h3>${episode.title}</h3>
            <p>${episode.body}</p>
        </div>
    `).join('');
}
window.onload = fetchEpisodes;
