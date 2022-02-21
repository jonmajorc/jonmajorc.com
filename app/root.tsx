import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type {MetaFunction} from 'remix'
import mainStyles from '~/styles/main.css'
import {getSocialMetas} from '~/utils/seo'
import {Header} from '~/components/header'
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
      href: '/noise-d.png',
      as: 'image',
      type: 'image/png',
    },
    {
      rel: 'preload',
      href: '/noise-l.png',
      as: 'image',
      type: 'image/png',
    },
    {
      rel: 'preload',
      href: '/me.png',
      as: 'image',
      type: 'image/png',
    },
    {
      rel: 'preload',
      href: '/me-l.jpg',
      as: 'image',
      type: 'image/jpg',
    },
    {
      rel: 'preload',
      href: '/me-d.jpg',
      as: 'image',
      type: 'image/jpg',
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
            <body className={clsx(['body', `theme--${theme}`])}>
              <div className="background" />
              <div className="noise" />
              <Header />
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
