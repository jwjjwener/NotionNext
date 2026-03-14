import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 导航菜单 — 水平展开居中
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  let links = [
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE')
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH')
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('HEO_MENU_CATEGORY')
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('HEO_MENU_TAG')
    }
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU', BLOG.CUSTOM_MENU)) {
    links = customMenu
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    setShowMenu(false)
  }, [router])

  if (!links || links.length === 0) {
    return null
  }

  return (
    <>
      {/* 桌面端：水平展开居中 */}
      <nav className='hidden lg:flex flex-1 justify-center'>
        <ul className='flex items-center gap-2'>
          {links?.map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </ul>
      </nav>

      {/* 移动端：汉堡按钮 + 下拉菜单 */}
      <div className='lg:hidden flex items-center'>
        <button
          id='navbarToggler'
          onClick={toggleMenu}
          className={`rounded-lg px-3 py-[6px] ring-primary focus:ring-2 ${
            showMenu ? 'navbarTogglerActive' : ''
          }`}>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white duration-200 transition-all'></span>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white duration-200 transition-all'></span>
          <span className='relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white duration-200 transition-all'></span>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <nav
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-[#111] lg:hidden ${
          showMenu ? '' : 'hidden'
        }`}>
        <ul className='block'>
          {links?.map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </ul>
      </nav>
    </>
  )
}
