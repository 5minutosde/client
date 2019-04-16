const loadAbout = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {

    return response.json().then((json) => {

      const audios = Object.values(json).filter((audio) => {
        if (audio.slug === 'o-que-e-o-5-minutos-por-linocente' || audio.slug === 'welcome-por-little-war')
          return audio
      })

      audios.reverse().forEach(audio => {
        renderAudio(audio)
      })

    })
  })
}

const loadUser = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {

    return response.json().then((json) => {
      const user = window.location.search.replace('?','')

      document.title += ` ${user}`
      document.getElementById('navbar-logo').innerHTML += `<a href="/por/?${user}" class="navbar-item navbar-user">${user}</a>`
      document.getElementById('title').innerHTML += `<a href="/por/?${user}">${user}</a>`

      const audios = Object.values(json).filter((audio) => {
        if (audio.media_audio)
          return audio.user.username === user
      })

      const mentions = Object.values(json).filter((audio) => {
        if (audio.media_audio)
          if (audio.title)
            return audio.title.includes(user)
      })

      audios.reverse().forEach(audio => {
        renderAudio(audio)
      })

      mentions.reverse().forEach(audio => {
        renderAudio(audio, 'mentions')
      })

      document.getElementById('count-audios').innerHTML = Object.keys(audios).length
      document.getElementById('count-mentions').innerHTML = Object.keys(mentions).length

    })
  })
}

const loadSingleAudio = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {
    return response.json().then((json) => {
      const slug = window.location.search.replace('?','')

      const single = Object.values(json).filter((audio) => {
        if (audio.media_audio)
          return audio.slug === slug
      })

      single.forEach(audio => {
        document.getElementById('hero-container').innerHTML = `
          <h1 class="title">${audio.title}</h1>
          <h2 class="subtitle">por <a href="/por/?${audio.user.username}">@${audio.user.username}</a></h2>
        `
        renderAudio(audio)
      })

    })
  })
}

const loadHome = () => {
  fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {

    return response.json().then((json) => {
      const audios = Object.values(json).filter((audio) => {
        if (audio.media_audio)
          return audio.user.username
      })

      audios.reverse().forEach(audio => {
        renderAudio(audio)
      })

    })
  })
}

const renderAudio = (media, elem) => {
  const { title, media_audio, user, slug, created_at } = media
  const list = document.getElementById( elem || 'audios' )

  let displaySlug
  if (!slug) {
    displaySlug = 'is-invisible'
  }

  if (user)
  list.innerHTML += `
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
            <audio controls>
              <source src="${media_audio}" type="audio/ogg">
            </audio>
            <time datetime="${created_at}">${created_at}</time>
            <button class="button is-small btn-copy ${displaySlug}" onclick="displayNotification()" data-clipboard-text="http://5minutos.de/?${slug || ''}" title=""><img src="/imgs/iconfinder_icon-share_211886.png" height="18" width="18"></button>
          </div>
        </div>
      </div>
    `
    return
}

const displayNotification = () => {
  const { classList } = document.getElementById('notification')
  classList.add('animated', 'fadeInUp')
  classList.remove('fadeOutDown')

  setTimeout(
    function () {
      classList.add('animated', 'fadeOutDown')
      classList.remove('fadeInUp')
    }, 2000)
}

const showMentions = (elem) => {
  document.getElementById('audios').style.display = 'none'
  document.getElementById('mentions').style.display = 'block'
  document.getElementsByClassName('is-active')[0].classList.remove('is-active')
  elem.classList.add("is-active")
}

const showAudios = (elem) => {
  document.getElementById('audios').style.display = 'block'
  document.getElementById('mentions').style.display = 'none'
  document.getElementsByClassName('is-active')[0].classList.remove('is-active')
  elem.classList.add("is-active")
}