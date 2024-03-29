const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    // Drake Songs
    { title: "In My Feelings", artist: "Drake", genre: "Hip-Hop" },
    { title: "Hotline Bling", artist: "Drake", genre: "Hip-Hop" },
    { title: "God's Plan", artist: "Drake", genre: "Hip-Hop" },
    // Travis Scott Songs
    { title: "SICKO MODE", artist: "Travis Scott", genre: "Hip-Hop" },
    { title: "goosebumps", artist: "Travis Scott", genre: "Hip-Hop" },
    // Amapiano Songs
    { title: "AmaDM", artist: "Kabza De Small", genre: "Amapiano" },
    { title: "uNgayeki", artist: "Focalistic", genre: "Amapiano" },
    { title: "Mapara", artist: "Mapara A Jazz", genre: "Amapiano" },
    { title: "Umsebenzi Wethu", artist: "Busta 929 & Mpura ft. Zuma, Mr JazziQ, Lady Du & Reece Madlisa", genre: "Amapiano" },
    { title: "John Wick", artist: "De Mthuda & Njelic", genre: "Amapiano" },
    // Kwaito Songs
    { title: "Vum Vum", artist: "Brown Dash", genre: "Kwaito" },
    { title: "Back To Kasi", artist: "Brown Dash", genre: "Kwaito" },
    { title: "Phans' Komthunzi Welanga", artist: "Brown Dash", genre: "Kwaito" },
    { title: "Mthandazo Wabolova", artist: "Brown Dash", genre: "Kwaito" },
    { title: "Umthandazo Wam", artist: "Brown Dash", genre: "Kwaito" },
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Kwaito", // Drax prefers Metal
    "Rocket": "Hip-Hop", // Rocket prefers Hip-Hop
};

function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).reduce((playlists, guardian) => {
        const preferredGenre = guardians[guardian];
        playlists[guardian] = songs
            .filter(song => song.genre === preferredGenre)
            .map(song => `${song.title} by ${song.artist}`);
        return playlists;
    }, {});
}

function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');
    playlistsContainer.innerHTML = ''; // Clear existing content

    Object.keys(playlists).forEach(guardian => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');

        const heading = document.createElement('h2');
        heading.textContent = guardian === 'Star-Lord' ? 'Star-Lord Playlist' : guardian + ' Playlist'; // Add 'Playlist'
        playlistDiv.appendChild(heading);

        const playlistList = document.createElement('ul');
        playlists[guardian].forEach(song => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#'; // Replace '#' with your link URL

            // Split the song into title and artist
            const [title, artist] = song.split(' by ');

            // Create spans for title and artist
            const titleSpan = document.createElement('span');
            titleSpan.textContent = title;

            const artistSpan = document.createElement('span');
            artistSpan.textContent = artist;

            // Apply gold color and link only to the title span
            titleSpan.style.color = 'gold';
            link.style.color = 'gold'; // Set link color to gold
            link.style.textDecoration = 'underline'; // Add underline
            link.appendChild(titleSpan);

            // Append the artist span
            listItem.appendChild(link);
            listItem.appendChild(document.createTextNode(' by '));
            listItem.appendChild(artistSpan);

            playlistList.appendChild(listItem);
        });

        playlistDiv.appendChild(playlistList);
        playlistsContainer.appendChild(playlistDiv);
    });
}

const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);


//comments

// The variable 'songs' stores an array of objects representing songs, each containing information like title, artist, and genre.
// 'guardians' is an object holding the names of guardians as keys and their preferred music genres as values.
// 'generatePlaylist' is a function that takes 'guardians' and 'songs' as parameters and produces an object containing playlists tailored to each guardian.
// 'displayPlaylists' is a function responsible for rendering the playlists on the webpage, taking the playlists as input.
// 'playlistsContainer' refers to the DOM element where the playlists will be displayed.
// The 'reduce' method is employed to iterate through 'guardians' to generate playlists for each guardian.
// 'forEach' is used to loop over each guardian's playlist and present them on the webpage.
// 'createElement' is a function used to dynamically create HTML elements.
// 'appendChild' is a method for adding child elements to parent elements.
// 'textContent' is a property used to set the text content of an element.
// 'style' is a property used to modify the CSS styles of an element.
// 'map' is a method utilized to transform the array of songs into formatted strings for each guardian's playlist.





