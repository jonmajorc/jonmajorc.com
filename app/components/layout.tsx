import React from 'react'

import {Footer} from './footer'
import {Banner, Header} from './header'

interface ILayout {
  children: React.ReactNode
  banner?: Banner
}

const Layout = ({children, banner}: ILayout) => {
  return (
    <>
      <Header banner={banner ?? 'name'} />
      {children}
      <Footer />
    </>
  )
}

export {Layout}
