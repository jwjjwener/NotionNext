/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CONFIG from '../config'

/**
 * 站点图标
 * @returns
 */
export const Logo = props => {
  const { white, NOTION_CONFIG } = props
  const router = useRouter()
  // 直接从本地config读取logo，避免被Notion CONFIG覆盖
  const logoWhite = CONFIG.STARTER_LOGO_WHITE || CONFIG.STARTER_LOGO || '/images/starter/logo/logo.png'
  const logoNormal = CONFIG.STARTER_LOGO || '/images/starter/logo/logo.png'
  const { isDarkMode } = useGlobal()
  const [logo, setLogo] = useState(logoNormal)
  const [logoTextColor, setLogoTextColor] = useState('text-black')

  useEffect(() => {
    // 滚动监听
    const throttleMs = 200
    const navBarScrollListener = throttle(() => {
      // 何时显示浅色或白底的logo
      if (white || isDarkMode) {
        setLogo(logoWhite)
        setLogoTextColor('text-white')
      } else {
        setLogo(logoNormal)
        setLogoTextColor('text-black')
      }
    }, throttleMs)

    navBarScrollListener()
    window.addEventListener('scroll', navBarScrollListener)
    return () => {
      window.removeEventListener('scroll', navBarScrollListener)
    }
  }, [isDarkMode, router])

  return (
    <div className='w-60 max-w-full px-4'>
      <div className='navbar-logo flex items-center w-full py-5 cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {logo && (
          <LazyImage
            priority
            onClick={() => {
              router.push('/')
            }}
            src={logo}
            alt='logo'
            className='header-logo mr-1 h-8'
          />
        )}
        {/* logo文字 */}
        <span
          onClick={() => {
            router.push('/')
          }}
          className={`${logoTextColor} logo dark:text-white py-1.5 header-logo-text whitespace-nowrap text-2xl font-semibold`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
