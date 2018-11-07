const contentful = require('contentful')

var client = contentful.createClient({
  space: 'bay2fsdnii25',
  accessToken:
    '8cbf93b4dff85728fdb9940020e32848f9e0375134763725f7d46d0d917f699d'
})

function fetchUrl(slug) {
  return client
    .getEntries({
      content_type: 'post',
      'fields.slug': slug
    })
    .then(entries => {
      const entry = entries.items[0]
      sessionStorage.setItem(slug, JSON.stringify(entry))
      return entry
    })
}

function fetchSession(storedJson) {
  return new Promise(function(resolve, reject) {
    resolve(storedJson)
  })
    .then(sessionJSON => {
      return JSON.parse(sessionJSON)
    })
    .then(entry => {
      return entry
    })
}

export function getPostJson(slug) {
  const storedJson = sessionStorage.getItem(slug)

  if (storedJson) {
    return fetchSession(storedJson)
  } else {
    return fetchUrl(slug)
  }
}
