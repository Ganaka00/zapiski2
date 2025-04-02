// Загрузка эпизодов
fetch('http://localhost:3001/episodes')
  .then(response => response.json())
  .then(episodes => {
    const container = document.getElementById('episodes-list');
    episodes.forEach(episode => {
      container.innerHTML += `
        <div class="episode">
          <h3>${episode.title}</h3>
          <p>${episode.description}</p>
          <small>${episode.date}</small>
        </div>
      `;
    });
  });