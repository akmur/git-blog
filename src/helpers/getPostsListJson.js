import { onlyTitle, onlyDate, removeExtension } from './utils'

function fetchUrl(url) {
  return fetch(url)
    .then(response => response.json())
    .then(myJson => {
      sessionStorage.setItem('postsList', JSON.stringify(myJson))
      return myJson.map(item => {
        return {
          title: onlyTitle(item.name),
          date: onlyDate(item.name),
          githubLink: item.name
        }
      })
    })
}

function fetchSession(storedJson) {
  const sessionPromise = new Promise(function(resolve, reject) {
    resolve(storedJson)
  })

  return sessionPromise.then(sessionJSON => {
    const myJson = JSON.parse(sessionJSON).reverse()
    return myJson.map(item => {
      return {
        title: onlyTitle(item.name),
        date: onlyDate(item.name),
        githubLink: removeExtension(item.name)
      }
    })
  })
}

export function getPostsListJson(slug) {
  const url = 'https://api.github.com/repos/akmur/mdposts/contents/posts/'
  const storedJson = sessionStorage.getItem('postsList')

  // check if value is in local storage
  if (storedJson) {
    console.log('session')
    return fetchSession(storedJson)
  } else {
    console.log('fetch')
    return fetchUrl(url)
  }
}
