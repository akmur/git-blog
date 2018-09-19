import { h, render, Component } from 'preact'
import Header from './components/Header'
import loadTemplate from './helpers/loadTemplate'

import Navigo from 'navigo'
const root = null
const useHash = false // Defaults to: false
const router = new Navigo(root, useHash)

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      template: ''
    }
  }

  componentWillMount() {
    router
      .on({
        about: function() {
          this.setState({ template: loadTemplate('about') })
        }.bind(this),
        contacts: function() {
          this.setState({ template: loadTemplate('contacts') })
        }.bind(this),
        posts: function() {
          this.setState({ template: loadTemplate('posts') })
        }.bind(this),
        'posts/:slug': function(params) {
          this.setState({ template: loadTemplate('single', params.slug) })
        }.bind(this),
        '': function() {
          this.setState({ template: loadTemplate('home') })
        }.bind(this)
      })
      .resolve()
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.template}
      </div>
    )
  }
}
