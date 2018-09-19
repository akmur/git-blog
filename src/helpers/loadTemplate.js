import { h, render } from 'preact'
import Header from '../components/Header'
import About from '../components/About'
import Contacts from '../components/Contacts'
import PostsList from '../components/PostsList'
import PostSingle from '../components/PostSingle'
import Home from '../components/Home'

export default function loadTemplate(type, slug = null) {
  switch (type) {
    case 'about':
      return <About />
    case 'contacts':
      return <Contacts />
    case 'posts':
      return <PostsList />
    case 'single':
      return <PostSingle slug={slug} />
    case '':
      return <Home />
    default:
      return <Home />
  }
}
