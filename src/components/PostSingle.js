import render from '../helpers/render'
import { getPostJson } from '../helpers/getPostJson'
import { markdown } from 'markdown'
import dayjs from 'dayjs'
const matter = require('gray-matter')

export default function PostSingle(githubLink) {
  getPostJson(githubLink).then(response => {
    const meta = matter(response)
    const title = meta.data.title.replace(/^\w/, c => c.toUpperCase())
    const date = dayjs(meta.data.date).format('DD/MM/YYYY')
    const content = markdown.toHTML(response)

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
