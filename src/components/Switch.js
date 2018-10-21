export default function Switch(){
  const switchTrigger = document.querySelector('#switch')
  const body = document.querySelector('body')

  const currentTheme = localStorage.getItem('theme')
  if (!currentTheme) {
    body.classList.add('ui-light')
    switchTrigger.setAttribute('data-theme', 'ui-light')
  } else {
    body.classList.add(currentTheme)
    switchTrigger.setAttribute('data-theme', currentTheme)
  }

  switchTrigger.addEventListener('click', () => {
    const newTheme =
      event.target.getAttribute('data-theme') === 'ui-light'
        ? 'ui-dark'
        : 'ui-light'
    switchTrigger.setAttribute('data-theme', newTheme)
    body.className = newTheme
    localStorage.setItem('theme', newTheme)
  })
}