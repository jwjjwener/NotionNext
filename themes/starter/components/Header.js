/* eslint-disable no-unreachable */
import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import throttle from 'lodash.throttle'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { DarkModeButton } from './DarkModeButton'
import { LangSwitchButton } from './LangSwitchButton'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState('')

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  // 非首页路由始终显示 sticky 导航栏
  const isHomePage = router.pathname === '/'

  useEffect(() => {
    if (isDarkMode) {
      setColor('text-white')
    } else {
      setColor('')
    }

    const ud_header = document.querySelector('.ud-header')
    if (!isHomePage) {
      // 非首页：始终添加 sticky，不需要滚动监听
      ud_header?.classList?.add('sticky')
    } else {
      // 首页：根据滚动位置决定
      window.addEventListener('scroll', navBarScollListener)
      // 初始化时也检查一次（处理客户端导航回首页的情况）
      if (window.scrollY > 0) {
        ud_header?.classList?.add('sticky')
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [isDarkMode, isHomePage])

  // 滚动监听
  const throttleMs = 200
  const navBarScollListener = useCallback(
    throttle(() => {
      // eslint-disable-next-line camelcase
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY
      // 控制台输出当前滚动位置和 sticky 值
      if (scrollY > 0) {
        ud_header?.classList?.add('sticky')
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative -mx-4 flex items-center justify-between'>
            {/* Logo */}
            <Logo {...props} />

            <div className='flex w-full items-center justify-between px-4'>
              {/* 中间菜单 */}
              <MenuList {...props} />

              {/* 右侧功能 */}
              <div className='flex items-center gap-2 sm:gap-4 justify-end'>
                {/* 语言切换 */}
                <LangSwitchButton />
                {/* 深色模式切换 */}
                <DarkModeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  )
}
