import { h, render, Component } from 'preact'
import Navigo from 'navigo'
const root = null
const useHash = false // Defaults to: false
const router = new Navigo(root, useHash)

export default class Header extends Component {
  click(e) {
    e.preventDefault()
    router.navigate('about')
  }

  render(props, state) {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </nav>
    )
  }
}
