const contentful = require('contentful')

var client = contentful.createClient({
  space: 'bay2fsdnii25',
  accessToken:
    '8cbf93b4dff85728fdb9940020e32848f9e0375134763725f7d46d0d917f699d'
})

import { onlyTitle, onlyDate, removeExtension } from './utils'

function fetchUrl() {
  return client.getEntries().then(entries => {
    sessionStorage.setItem('postsList', JSON.stringify(entries))
    return entries.items
      .map(entry => {
        return {
          title: entry.fields.title,
          date: entry.fields.date,
          githubLink: entry.fields.slug
        }
      })
      .sort(function(a, b) {
        return new Date(b.date) - new Date(a.date)
      })
  })
}

function fetchSession(storedJson) {
  const sessionPromise = new Promise(function(resolve, reject) {
    resolve(storedJson)
  })

  return sessionPromise.then(storedJson => {
    const entries = JSON.parse(storedJson)
    return entries.items
      .map(entry => {
        return {
          title: entry.fields.title,
          date: entry.fields.date,
          githubLink: entry.fields.slug
        }
      })
      .sort(function(a, b) {
        return new Date(b.date) - new Date(a.date)
      })
  })
}

export function getPostsListJson() {
  const storedJson = sessionStorage.getItem('postsList')

  // // check if value is in local storage
  if (storedJson) {
    return fetchSession(storedJson)
  } else {
    return fetchUrl()
  }
}
