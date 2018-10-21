import Header from './components/Header'
import About from './components/About'
import Contacts from './components/Contacts'
import PostsList from './components/PostsList'
import PostSingle from './components/PostSingle'
import Home from './components/Home'
import render from './helpers/render'
import Navigo from 'navigo'
const root = null
var useHash = false; // Defaults to: false
var router = new Navigo(root);

export default function App() {
  document.querySelector('#nav').innerHTML = Header()

  router
    .on({
      about: function() {
        About()
      },
      contacts: function() {
        Contacts()
      },
      posts: function() {
        PostsList()
      },
      'posts/:slug': function(params) {
        PostSingle(params.slug)
      },
      '': function() {
        Home()
      }
    })
    .resolve()
}
