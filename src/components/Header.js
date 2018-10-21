import render from '../helpers/render'

export default function Header() {
  return `
    <div class="header">
      <a href="/" class="logo">
        <svg class="logo__triangle logo__triangle--left" xmlns="http://www.w3.org/2000/svg" viewBox="217 167 106 96" style="isolation:isolate">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="3" stroke-width="2" d="M220 260l50-90 50 90H220z" vector-effect="non-scaling-stroke"/>
        </svg>
        <svg class="logo__triangle logo__triangle--center" xmlns="http://www.w3.org/2000/svg" viewBox="217 167 106 96" style="isolation:isolate">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="3" stroke-width="2" d="M220 260l50-90 50 90H220z" vector-effect="non-scaling-stroke"/>
        </svg>
        <svg class="logo__triangle logo__triangle--right" xmlns="http://www.w3.org/2000/svg" viewBox="217 167 106 96" style="isolation:isolate">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="3" stroke-width="2" d="M220 260l50-90 50 90H220z" vector-effect="non-scaling-stroke"/>
        </svg>
      </a>
      <div id="nav">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="/" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
              <a href="/about" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="/posts" class="nav__link">Posts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `
}
