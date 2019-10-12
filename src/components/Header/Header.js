import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import HeaderModule from './Header.module.scss'

function Header() {
  const onClickOpenMenu = () =>  {
    document.querySelector(`.js-navMenu`).classList.toggle(`${HeaderModule.change}`)
    document.querySelector(`body`).classList.toggle(`${HeaderModule.opend}`)
    document.querySelector(`.${HeaderModule.backMenu}`).classList.toggle(`${HeaderModule.navOpen}`)
    document.querySelector(`.${HeaderModule.nav}`).classList.toggle(`${HeaderModule.navMenuOpen}`)
  }

  return (
    <header>
      <div className={`js-navMenu ${HeaderModule.burger}`} onClick={onClickOpenMenu}>
        <div className={`${HeaderModule.bar1}`}></div>
        <div className={`${HeaderModule.bar2}`}></div>
        <div className={`${HeaderModule.bar3}`}></div>
      </div>

      <div className={HeaderModule.backMenu} />
      <nav className={HeaderModule.nav}>
        <ul className={HeaderModule.ul}>
          <li><AnchorLink href='#services' onClick={onClickOpenMenu}>Services</AnchorLink></li>
          <li><AnchorLink href='#team' onClick={onClickOpenMenu}>Team</AnchorLink></li>
          <li><AnchorLink href='#contact' onClick={onClickOpenMenu}>Contact Us!</AnchorLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
