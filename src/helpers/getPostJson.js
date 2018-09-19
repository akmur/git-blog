function fetchUrl(url) {
  return fetch(decodeURI(url))
    .then(response => response.json())
    .then(myJson => {
      sessionStorage.setItem(url, JSON.stringify(myJson))
      return atob(myJson.content)
    })
}

function fetchSession(storedJson) {
  return new Promise(function(resolve, reject) {
    resolve(storedJson)
  })
    .then(sessionJSON => {
      return JSON.parse(sessionJSON)
    })
    .then(myJson => {
      return atob(myJson.content)
    })
}

export function getPostJson(slug) {
  const url =
    'https://api.github.com/repos/akmur/mdposts/contents/posts/' + slug + '.md'
  const storedJson = sessionStorage.getItem(url)

  if (storedJson) {
    console.log('session')
    return fetchSession(storedJson)
  } else {
    console.log('fetch')
    return fetchUrl(url)
  }
}
