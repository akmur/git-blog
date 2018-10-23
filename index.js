import App from './src/App'
import './src/scss/styles.scss'

App()

const allCode = document.querySelectorAll('code')
for (let index = 0; index < allCode.length; index++) {
  const element = allCode[index]
  hljs.highlightBlock(element)
}
