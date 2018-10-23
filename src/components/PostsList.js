import Header from './Header'
import { getPostsListJson } from '../helpers/getPostsListJson'
import { onlyDate } from '../helpers/utils'
import dayjs from 'dayjs'
import render from '../helpers/render'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function PostsList() {
  document.title = `Posts - Alessandro Muraro - Frontend Developer`
  document.querySelector('#nav').innerHTML = Header()

  getPostsListJson().then(response => {
    const posts = response
      .map((item, index) => {
        const itemLink = `/#!/posts/${item.githubLink}`
        const itemTitle = item.title
        const itemDate = dayjs().to(dayjs(onlyDate(item.githubLink)))
        return `
        <li class="postsList__item">
          <a class="postsList__link" href=${itemLink}>
            <h2 class="postsList__title">${itemTitle}</h2>
            <span class="postsList__date">${itemDate}</span>
          </a>
        </li>
        `
      })
      .join('')

    const html = `
      <div class="postsList">
        <ul class="postsList__list">
          ${posts}
        </ul>
      </div>
    `

    render('#content', html)
  })
}
