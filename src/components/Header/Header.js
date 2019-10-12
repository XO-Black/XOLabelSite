import React from "react"
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import HeaderModule from './Header.module.scss'

function Header() {
  const onClickOpenMenu = () =>  {
    document.querySelector(`.js-navMenu`).classList.toggle(`${HeaderModule.change}`)
    document.querySelector(`body`).classList.toggle(`${HeaderModule.opend}`)
    document.querySelector(`.${HeaderModule.nav}`).classList.toggle(`${HeaderModule.navOpen}`)
  }

  return (
    <header>
      <div className={`js-navMenu ${HeaderModule.burger}`} onClick={onClickOpenMenu}>
        <div className={`${HeaderModule.bar1}`}></div>
        <div className={`${HeaderModule.bar2}`}></div>
        <div className={`${HeaderModule.bar3}`}></div>
      </div>

      <nav className={HeaderModule.nav}>
        <ul>
          <li>test</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
