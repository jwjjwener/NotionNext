/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import { useStarterI18n } from '../hooks/useStarterI18n'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'
import { HeroCarousel } from './HeroCarousel'

/**
 * 英雄大图区块 — 左右分栏式布局
 * 左侧：标题 + 副标题 + 按钮
 * 右侧：轮播图（淡入淡出 + Ken Burns）
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  const heroButton1Icon = siteConfig('STARTER_HERO_BUTTON_1_ICON', null, config)

  // 轮播图片：数组配置直接从 CONFIG 读取（siteConfig 不能可靠处理数组）
  const carouselImages = CONFIG.STARTER_HERO_CAROUSEL_IMAGES || []
  const previewImage = siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, config)
  const images = carouselImages.length > 0
    ? carouselImages
    : previewImage
      ? [previewImage]
      : []
  const carouselInterval = CONFIG.STARTER_HERO_CAROUSEL_INTERVAL || 5000

  return (
    <>
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-[#FFE4E6] dark:bg-black pt-[120px] md:pt-[130px] lg:pt-[160px] pb-16 lg:pb-20'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            {/* 左侧：文字区域 */}
            <div className='w-full px-4 lg:w-5/12'>
              <div
                className='hero-content wow fadeInUp text-center lg:text-left'
                data-wow-delay='.2s'>
                {/* 主标题 */}
                <h1 className='mb-6 text-3xl font-bold leading-snug text-dark dark:text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                  {useStarterI18n('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='mb-9 max-w-[600px] text-base font-medium text-body-color dark:text-dark-6 sm:text-lg sm:leading-[1.44] mx-auto lg:mx-0'>
                  {useStarterI18n('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-5'>
                  {useStarterI18n('STARTER_HERO_BUTTON_1_TEXT', null, config) && (
                    <li>
                      <SmartLink
                        href={siteConfig('STARTER_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-md bg-primary px-7 py-[14px] text-center text-base font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-[#0d6560]'>
                        {heroButton1Icon && (
                          <img
                            className='mr-3 h-5 w-5'
                            src={heroButton1Icon}
                            alt='button icon'
                          />
                        )}
                        {useStarterI18n('STARTER_HERO_BUTTON_1_TEXT', null, config)}
                      </SmartLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* 右侧：轮播图区域 */}
            {images.length > 0 && (
              <div className='w-full px-4 lg:w-7/12'>
                <div
                  className='wow fadeInUp relative z-10'
                  data-wow-delay='.25s'>
                  <HeroCarousel images={images} interval={carouselInterval} />
                  {/* 背景装饰 */}
                  <div className='absolute -left-9 bottom-0 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' alt='' />
                  </div>
                  <div className='absolute -right-6 -top-6 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' alt='' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}
