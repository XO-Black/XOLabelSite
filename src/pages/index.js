import React, { lazy, Suspense } from 'react'
import '../global.css'

const LandingPage = lazy(() => import('../subpages/LandingPage/LandingPage'))
const Services = lazy(() => import('../subpages/Services'))
const Team = lazy(() => import('../subpages/Team'))
const End = lazy(() => import('../subpages/End'))
const Footer = lazy(() => import('../components/Footer'))
const Header = lazy(() => import('../components/Header/Header'))

function Index() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}><Header /></Suspense>
      <Suspense fallback={<div>Loading...</div>}><LandingPage/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Services/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Team/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><End/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Footer/></Suspense>
    </div>
  )
}

export default Index
