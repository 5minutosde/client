fetch('https://fiveminutes-5655c.firebaseio.com/audios.json').then((response) => {
  return response.json().then((json) => {
    let user = window.location.pathname.replace(/\//g,'')
    const audios = Object.values(json).filter((audio) => {
      return audio.user === parseInt(user, 10)
    })
    audios.forEach(audio => {
      renderAudios(audio)
    })
  })
})

const renderAudios = media => {
  const { title, audio } = media
  const home = document.getElementById('home')
  home.innerHTML += `
  <div class="card">
    <h2> ${title} </h2>
    <audio controls>
      <source src="${audio}" type="audio/ogg">
    </audio>
  </div>
  `
}