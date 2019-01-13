import About from './components/About'
import PostsList from './components/PostsList'
import PostSingle from './components/PostSingle'
import Home from './components/Home'
import render from './helpers/render'
import Switch from './components/Switch'
import Navigo from 'navigo'
var root = null
var useHash = true // Defaults to: false
var hash = '#!' // Defaults to: '#'
var router = new Navigo(root, useHash, hash)

export default function App() {
  Switch()

  router
    .on({
      'about': function() {
        About()
      },
      'posts': function() {
        PostsList()
      },
      'posts/:slug': function(params) {
        PostSingle(params.slug)
      },
      '*': function() {
        Home()
      }
    })
    .resolve()
}
