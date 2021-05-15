import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIsViewport } from '../../hooks'
import { DarkModeToogle } from '../darkModeToogle'

const MENUS = [
  {
    href: '/portfolio',
    text: 'Portfolio',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
]

export const NavBar: React.FC = () => {
  const router = useRouter()
  const isLgViewport = useIsViewport('lg')
  const [showMenu, setShowMenu] = React.useState(undefined)

  const handleOnClickMenu = React.useCallback(() => {
    setShowMenu((oldValue) => !oldValue)
  }, [])

  const handleOnClickMenuItem = React.useCallback(() => {
    setShowMenu((oldValue) => !oldValue)
  }, [])

  return (
    <>
      <div className="bg-green-400 fixed w-full z-50">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-4 px-10">
          <div className="flex items-center flex-shrink-0 text-white cursor-pointer">
            <Link href="/">
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
            </Link>
          </div>
          <div className="block lg:hidden" aria-hidden="true">
            <div className="flex flex-row">
              <div className="flex mr-3">
                <DarkModeToogle />
              </div>
              <div className="flex">
                <button
                  onClick={handleOnClickMenu}
                  className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {(isLgViewport || showMenu) && (
            <>
              <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                  isLgViewport && 'ml-12'
                }`}
              >
                <div className="text-md lg:flex-grow">
                  {MENUS.map((menu) => (
                    <Link key={menu.href} href={menu.href}>
                      <span
                        onClick={handleOnClickMenuItem}
                        aria-hidden="true"
                        className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8 ${
                          router.pathname === menu.href && 'text-white'
                        } ${router.pathname !== menu.href && 'cursor-pointer'}`}
                      >
                        {menu.text}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <DarkModeToogle />
            </>
          )}
        </nav>
      </div>
      <div className="h-24" />
    </>
  )
}
