import render from '../helpers/render'
import Header from './Header'

export default function Home() {
  document.title = 'Alessandro Muraro - Frontend Developer'
  document.querySelector('#nav').innerHTML = Header()
  const html = `
  <div class="pageHome">
    <div class="contentBlock contentBlock--home">
      <div class="contentBlock__preTitle u-center">
        Hi there, I'm Alessandro Muraro.
      </div>
      <h1 class="contentBlock__title u-center">
        I'm a frontend developer,<br />I make websites.
        <span class="emoji" role="img" aria-label="waving hand">
          👋
        </span>
      </h1>
    </div>
  </div>
  `
  render('#content', html)
}
