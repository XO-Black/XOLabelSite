import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import vidMP4 from '../../assets/videos/Wavez.mp4'
import vidOGV from '../../assets/videos/Wavez.ogv'
import vidWEBM from '../../assets/videos/Wavez.webm'



import landingPageModule from './LandingPage.module.scss'
import '../../assets/styles/modules/_glitch.scss'
import '../../assets/styles/modules/_scroll.scss'

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
      }
    }
  `)

  const { welcomeText } = pageDataYaml

  return (
    <section id="home" className={landingPageModule.wrapper}>
      <div className={landingPageModule.videowrapper}>
        <video autoPlay muted loop id="myVideo" className={landingPageModule.video}>
          <source src={vidMP4} type="video/mp4"/>
          <source src={vidOGV} type="video/ogv"/>
          <source src={vidWEBM} type="video/webm"/>
        </video>
      </div>

      <div className={landingPageModule.opac} />
      <h1 className={`glitch ${landingPageModule.title}`} data-text="XO Blacc">{welcomeText}</h1>

      <AnchorLink href='#services' className={landingPageModule.mouseblock}>
        <div className="mouse" />
      </AnchorLink>
    </section>
  )
}

export default LandingPage
