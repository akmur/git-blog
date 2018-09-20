import render from '../helpers/render'

export default function Header() {
  return `
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
  `
}
