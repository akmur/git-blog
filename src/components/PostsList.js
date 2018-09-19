import { h, render, Component } from 'preact'
import { getPostsListJson } from '../helpers/getPostsListJson'
import Navigo from 'navigo'
var root = null
var useHash = false // Defaults to: false
var router = new Navigo(root, useHash)

export default class PostsList extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    getPostsListJson().then(response => {
      this.setState({
        posts: response
      })
    })
  }

  render() {
    const posts = this.state.posts.map((item, index) => {
      const itemLink = `/posts/${item.githubLink}`
      const itemTitle = item.title
      const itemDate = item.date
      return (
        <li key={index}>
          <a href={itemLink}>
            {itemTitle} / {itemDate}
          </a>
        </li>
      )
    })

    return <div>{posts}</div>
  }
}
