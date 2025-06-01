document.querySelectorAll('#mood-selector button').forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    fetchSongs(mood);
  });
});

function fetchSongs(mood) {
  fetch('data/songs.json')
    .then(response => response.json())
    .then(data => {
      const filtered = data.filter(song => song.mood === mood);
      displaySongs(filtered);
    });
}

function displaySongs(songs) {
  const container = document.getElementById('song-list');
  container.innerHTML = '';
  songs.forEach(song => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${song.title} - ${song.artist}</h3>
      <audio controls>
        <source src="${song.audio}" type="audio/mpeg">
        Tarayıcınız ses öğesini desteklemiyor.
      </audio>
    `;
    container.appendChild(div);
  });
}
