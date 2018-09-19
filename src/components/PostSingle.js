import { h, render, Component } from 'preact'
import { getPostJson } from '../helpers/getPostJson'
import { markdown } from 'markdown'
import { PreactHTMLConverter } from 'preact-html-converter'
import dayjs from 'dayjs'
const matter = require('gray-matter')
const converter = PreactHTMLConverter()

class PostSingle extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      date: '',
      content: ''
    }
  }

  componentWillMount() {
    const githubLink = this.props.slug
    getPostJson(githubLink).then(response => {
      const meta = matter(response)
      const markdownToHTML = markdown.toHTML(response)
      this.setState({
        title: meta.data.title,
        date: meta.data.date,
        content: markdownToHTML
      })
    })
  }

  render() {
    const htmlContent = converter.convert(this.state.content)
    const title = this.state.title.replace(/^\w/, c => c.toUpperCase())
    const postDate = dayjs(this.state.date).format('DD/MM/YYYY')
    return (
      <div>
        <h1>{title}</h1>
        <div className="date">{postDate}</div>
        <div>{htmlContent}</div>
      </div>
    )
  }
}

export default PostSingle
