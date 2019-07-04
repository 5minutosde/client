
const loadEmbed = (audio) => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {
    return response.json().then((json) => {
      const slug = audio.replace('http://5minutos.de/?','')

      console.log(slug)

      const single = Object.values(json).filter((audio) => {
        if (audio.media_audio)
          return audio.slug === slug
      })

      console.log(single)

      single.forEach(audio => {
        renderAudio(audio)
      })

    })
  })
}

const renderAudio = (media, elem) => {
  const { title, media_audio, user, slug, created_at } = media
  const list = document.getElementById( 'embed-5-minutos' )

  let displaySlug
  if (!slug) {
    displaySlug = 'is-invisible'
  }

  if (user)
  list.innerHTML += `
    <div class="five-minutes">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <a href="/por/?${user.username}">
                  <img src="${user.avatar || 'https://api.adorable.io/avatars/150/' + user.username}" alt="@${user.username}">
                </a>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4"><a href="/?${slug || ''}">${title || ''}</a></p>
              <p class="subtitle is-6"><a href="/por/?${user.username}">@${user.username}</a></p>
            </div>
          </div>
          <div class="content">
            <audio preload="none" controls>
              <source src="${media_audio}" type="audio/ogg">
            </audio>
            <time datetime="${created_at}">${created_at}</time>
          </div>
        </div>
      </div>
    </div>
    `
    return
}

const audio = document.getElementById( 'embed-5-minutos' ).dataset.url
loadEmbed(audio)
