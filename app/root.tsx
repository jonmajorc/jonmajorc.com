import clsx from 'clsx'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type {MetaFunction} from 'remix'
import {Header} from '~/components/header'
import mainStyles from '~/styles/main.css'
import {getSocialMetas} from '~/utils/seo'

import {Footer} from './components/footer'
import {ThemeProvider} from './utils/theme-provider'

export const meta: MetaFunction = () => {
  return getSocialMetas()
}

export function links() {
  return [
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/Cutive-Regular.ttf',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/CutiveMono-Regular.ttf',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/noise-dark.png',
      as: 'image',
      type: 'image/png',
    },
    {
      rel: 'preload',
      href: '/noise-light.png',
      as: 'image',
      type: 'image/png',
    },
    {
      rel: 'preload',
      href: '/silhouette-dark.jpg',
      as: 'image',
      type: 'image/jpg',
    },
    {
      rel: 'preload',
      href: '/silhouette-dark.jpg',
      as: 'image',
      type: 'image/jpg',
    },
    {
      rel: 'preload',
      href: 'https://s2.svgbox.net/pen-brushes.svg?ic=brush-6&color=EE3F46',
      as: 'image',
      type: 'image/svg+xml',
    },
    {rel: 'stylesheet', href: mainStyles},
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeProvider>
        {theme => {
          return (
            <body className={clsx(['body', `theme--${theme.mode}`])}>
              <div className="background" />
              <div className="noise" data-noise={theme.noise} />
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </body>
          )
        }}
      </ThemeProvider>
    </html>
  )
}
