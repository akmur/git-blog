
import render from '../helpers/render'

export default function About() {
  document.title = 'About - Alessandro Muraro - Frontend Developer'
  window.scrollTo(0, 0)
  render(
    '#content',
    `
    <div class="pageContent">
      <div class="contentBlock">
        <h2 class="contentBlock__title">Who I am</h2>
        <div class="contentBlock__description">
          I am <span class="u-strong">Alessandro Muraro</span>, a frontend developer from
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.google.de/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/data=!4m2!3m1!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d?sa=X&ved=2ahUKEwjn94f73Y_eAhWihqYKHc2yAnAQ8gEwAHoECAAQAQ"
          >Milano, Italy</a>, and currently based in
          <a
            href="https://www.google.de/maps/place/Aachen/@50.7595961,5.9564421,11z/data=!3m1!4b1!4m5!3m4!1s0x47c0997cb08a191d:0x63a30eae0b0e444f!8m2!3d50.7753455!4d6.0838868"
            target="blank"
            rel="noopener noreferrer"
          >
            Aachen, Germany
          </a>.
          <br />I started hacking away at the web back in 1999, but it was just
          my hobby for many years. In 2011, I started my professional career in
          frontend development. <br />
          Over the last 15 (!) years or so, I have been living around Europe:
          Italy
          <span role="img" aria-label="italian flag">
            🇮🇹
          </span>
          , the Netherlands
          <span role="img" aria-label="dutch flag">
            🇳🇱
          </span>
          , Ireland
          <span role="img" aria-label="irish flag">
            🇮🇪
          </span>
          , and now Germany
          <span role="img" aria-label="german flag">
            🇩🇪
          </span>, where I live with my wife Antonella, my kid Matteo, and my dogs Mela and Tobi.
        </div>
      </div>
      <div class="contentBlock">
        <div class="avatar">
          <img src="https://filedn.com/lmWxu5DGgw0FbsUS7mWpc3S/site-image.jpg" />
        </div>
      </div>
      <div class="contentBlock">
        <h2 class="contentBlock__title">What I do</h2>
        <div class="contentBlock__description">
          I am experienced in dealing with complex and/or legacy codebases,
          which I love to refactor and get back into shape. I'm always learning
          new technologies which I apply responsibly, careful not to create
          technical debt. I specialize in coding modular, component-based
          websites. I am passionate about clean, maintainable, readable code and
          I fight the good fight against
          <a
            href="https://en.wikipedia.org/wiki/Software_entropy"
            rel="noopener noreferrer"
            target="_blank"
          >software entropy</a>.
        </div>
      </div>
      <div class="contentBlock">
        <h2 class="contentBlock__title">What I'm Doing</h2>
        <div class="contentBlock__description">
          Since December 2018 I am working at <a class="link" href="https://energieloft.de/de/startseite/" target="blank">Energieloft</a>
          in Aachen, Germany 🇩🇪 as Senior Frontend developer. I take care of frontend architecture and UI development.
        </div>
      </div>
      <div class="contentBlock">
        <h2 class="contentBlock__title">What I've done</h2>
        <div class="contentBlock__description">
          <ul class="cvlist">
            <li class="cvlist__item">
              <a class="link" href="http://navabi.de/" target="blank">navabi GmbH</a>
              🇩🇪 Senior Frontend developer, 2017 to 2018
            </li>
            <li class="cvlist__item">
              <a
                class="link"
                href="http://www.objectway.it/IT/default.asp"
                target="blank"
              >Objectway</a> 🇮🇹 Frontend developer, 2015 to 2017
            </li>
            <li class="cvlist__item">
              <a
                class="link"
                href="http://www.thelevelgroup.com/"
                target="blank"
              >The Level Group</a> 🇮🇹 Frontend developer, 2014 to 2015
            </li>
            <li class="cvlist__item">
              <a class="link" href="http://www.pazienti.it/" target="blank">Pazienti</a>
              🇮🇹 Frontend developer / UX / UI, 2011 to 2014
            </li>
            <li class="cvlist__item">
              <a class="link" href="http://www.apple.com/" target="blank">
                Apple</a> 🇮🇪 Tech support, 2003 to 2007
            </li>
            <li class="cvlist__item">
              <a class="link" href="http://www.unisys.com/" target="blank">Unisys</a> 🇳🇱 Tech support, 2001 to 2003
            </li>
          </ul>
        </div>
      </div>
      <div class="contentBlock">
        <h3 class="contentBlock__title">What I know</h3>
        <div class="contentBlock__description">
          <div class="contentBlock__columnWrapper">
            <div class="contentBlock__column">
              <h4 class="contentBlock__smallTitle">Core Skills</h4>
              <ul class="cvlist">
                <li class="cvlist__item cvlist__item--tag">HTML</li>
                <li class="cvlist__item cvlist__item--tag">CSS / SCSS</li>
                <li class="cvlist__item cvlist__item--tag">
                  JavaScript ES6
                </li>
                <li class="cvlist__item cvlist__item--tag">UX / UI</li>
                <li class="cvlist__item cvlist__item--tag">Git</li>
                <li class="cvlist__item cvlist__item--tag">Command Line</li>
                <li class="cvlist__item cvlist__item--tag">
                  Fluent English / Native Italian / Basic German
                </li>
              </ul>
            </div>
            <div class="contentBlock__column">
              <h4 class="contentBlock__smallTitle">Frameworks & more</h4>
              <ul class="cvlist">
                <li class="cvlist__item cvlist__item--tag">
                  React / Redux
                </li>
                <li class="cvlist__item cvlist__item--tag">Express.js</li>
                <li class="cvlist__item cvlist__item--tag">
                  Gulp / NPM scripts / webpack
                </li>
                <li class="cvlist__item cvlist__item--tag">Linters</li>
                <li class="cvlist__item cvlist__item--tag">
                  Scrum / Agile methodologies
                </li>
                <li class="cvlist__item cvlist__item--tag">jQuery</li>
                <li class="cvlist__item cvlist__item--tag">
                  Basic DevOps
                </li>
                <li class="cvlist__item cvlist__item--tag">
                  Web performances
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="contentBlock">
        <h2 class="contentBlock__title">Get in touch</h2>
        <div class="contentBlock__description">
            You can follow me and message me on <a class="link" href="https://twitter.com/akmur">Twitter</a>, <a class="link" href="https://mastodon.social/@akmur">Mastodon</a>, <a class="link" href="https://www.linkedin.com/in/alessandromuraro/">Linkedin</a> or <a class="link" href="https://github.com/akmur">Github</a>.
        </div>
      </div>
      <div class="contentBlock">
        <h2 class="contentBlock__title">My resume</h2>
        <div class="contentBlock__description">
            Want to know more?<br />Here you can download my curriculum vitae in PDF format, or go to Linkedin to learn even more about me, and connect if you feel like it.
        </div>
        <div class="actions">
          <a
            href="https://www.dropbox.com/s/vlqweze4o9kzwf9/Resume%20Alessandro%20Muraro.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            class="actions__cta button"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/alessandromuraro/"
            target="_blank"
            rel="noopener noreferrer"
            class="actions__cta link"
          >
            Go to Linkedin
          </a>
        </div>
      </div>
    </div>
  `
  )
}
