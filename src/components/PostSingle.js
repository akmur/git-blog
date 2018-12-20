import Header from './Header'
import render from '../helpers/render'
import { onlyTitle, onlyDate, removeExtension } from '../helpers/utils'
import { getPostJson } from '../helpers/getPostJson'
import { markdown } from 'markdown'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function PostSingle(slug) {
  getPostJson(slug).then(item => {
    const title = item.fields.title
    const date = dayjs().to(dayjs(item.fields.date))

    const postContent = markdown.toHTML(item.fields.markdown)

    document.title = `${title} - Alessandro Muraro - Frontend Developer`
    document.querySelector('#nav').innerHTML = Header()

    const html = `
      <div class="pageContent pageContent--post">
        <h1 class="pageContent__title title title--h1">${title}</h1>
        <div class="pageContent__date date">${date}</div>
        <div class="pageContent__content">${postContent}</div>
      </div>
    `

    window.scrollTo(0, 0)
    render('#content', html)
  })
}
