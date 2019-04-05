const loadUser = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {

    return response.json().then((json) => {
      const user = window.location.search.replace('?','')

      document.title += ` ${user}`
      document.getElementById('navbar').innerHTML += `<a href="" class="navbar-item navbar-user">${user}</a>`
      document.getElementById('title').innerHTML += ` ${user}`

      const audios = Object.values(json).filter((audio) => {
        if (audio.user && audio.media_audio)
            return audio.user.username === user
      })

      audios.reverse().forEach(audio => {
        renderAudio(audio)
      })

    })
  })
}

const loadHome = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {

    return response.json().then((json) => {
      const audios = Object.values(json).filter((audio) => {
        if (audio.user && audio.media_audio)
            return audio.user.username
      })

      audios.reverse().forEach(audio => {
        renderAudio(audio)
      })

    })
  })
}

const renderAudio = media => {
  const { title, media_audio, user, slug, created_at } = media
  const audios = document.getElementById('audios')
  if (user)
    audios.innerHTML += `
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <a href="/por/?${user.username || ''}">
                  <img src="${user.avatar || 'https://api.adorable.io/avatars/150/' + user.username}" alt="@${user.username || ''}">
                </a>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${title || ''}</p>
              <p class="subtitle is-6"><a href="/por/?${user.username || ''}">@${user.username || ''}</a></p>
            </div>
          </div>
          <div class="content">
            <audio controls>
              <source src="${media_audio}" type="audio/ogg">
            </audio>
            <time datetime="${created_at}">${created_at}</time>
          </div>
        </div>
      </div>
    `

  return
}