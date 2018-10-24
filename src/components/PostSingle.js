import Header from './Header'
import render from '../helpers/render'
import { onlyTitle, onlyDate, removeExtension } from '../helpers/utils'
import { getPostJson } from '../helpers/getPostJson'
import { markdown } from 'markdown'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function PostSingle(githubLink) {
  getPostJson(githubLink).then(item => {
    // const meta = matter(item)
    const title = onlyTitle(githubLink)
    const date = dayjs().to(dayjs(onlyDate(githubLink)))
    const content = markdown.toHTML(item)
    document.title = `${title} - Alessandro Muraro - Frontend Developer`
    document.querySelector('#nav').innerHTML = Header()

    const html = `
      <div class="pageContent pageContent--post">
        <h1 class="pageContent__title title title--h1">${title}</h1>
        <div class="pageContent__date date">${date}</div>
        <div class="pageContent__content">${content}</div>
      </div>
    `

    window.scrollTo(0, 0)
    render('#content', html)

    const allCode = document.querySelectorAll('code')
    for (let index = 0; index < allCode.length; index++) {
      const element = allCode[index]
      hljs.highlightBlock(element)
    }
  })
}
