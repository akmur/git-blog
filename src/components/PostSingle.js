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

    const html = `
      <div class="post">
        <h1 class="title title--h1">${title}</h1>
        <div class="date">${date}</div>
        <div class="content">${content}</div>
      </div>
    `

    render('#content', html)
  })
}
