import render from '../helpers/render'

export default function Contacts() {
  document.title = 'Contacts - Alessandro Muraro - Frontend Developer'

  render(
    '#content',
    `
    <div class="pageContent">
      <div class="contentBlock">
        <h2 class="contentBlock__title">Get in touch</h2>
        <div class="contentBlock__description">
            You can follow and message me on <a class="link" href="https://twitter.com/akmur">Twitter</a>, <a class="link" href="https://webdev.network/@akmur">Mastodon</a>, <a class="link" href="https://www.linkedin.com/in/alessandromuraro/">Linkedin</a> or <a class="link" href="https://github.com/akmur">Github</a>.
        </div>
      </div>
    </div>
  `
  )
}
