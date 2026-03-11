/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useStarterI18n } from '../hooks/useStarterI18n'
import CONFIG from '../config'
import SmartLink from '@/components/SmartLink'

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  const heroButton1Icon = siteConfig('STARTER_HERO_BUTTON_1_ICON', null, config)
  return (
    <>
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-[#F0FDF4] dark:bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                data-wow-delay='.2s'>
                {/* 主标题 */}
                <h1 className='mb-6 text-3xl font-bold leading-snug text-dark dark:text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                  {useStarterI18n('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='mx-auto mb-9 max-w-[600px] text-base font-medium text-body-color dark:text-dark-6 sm:text-lg sm:leading-[1.44]'>
                  {useStarterI18n('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='mb-10 flex flex-wrap items-center justify-center gap-5'>
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

            {/* 产品预览图片 */}
            {siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, config) && (
              <div className='w-full px-4'>
                <div
                  className='wow fadeInUp relative z-10 mx-auto max-w-[845px]'
                  data-wow-delay='.25s'>
                  <div className='mt-16'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={siteConfig(
                        'STARTER_HERO_PREVIEW_IMAGE',
                        null,
                        config
                      )}
                      alt={siteConfig('TITLE', null, config)}
                      title={siteConfig('TITLE', null, config)}
                      className='mx-auto max-w-full rounded-t-xl rounded-tr-xl'
                    />
                  </div>

                  {/* 背景图 */}
                  <div className='absolute -left-9 bottom-0 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' />
                  </div>
                  <div className='absolute -right-6 -top-6 z-[-1]'>
                    <img src='/images/starter/bg-hero-circle.svg' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 横幅图片 */}
      {siteConfig('STARTER_HERO_BANNER_IMAGE', null, config) && (
        <div className='container'>
          <LazyImage
            priority
            className='w-full'
            src={siteConfig(
              'STARTER_HERO_BANNER_IMAGE',
              null,
              config
            )}></LazyImage>
        </div>
      )}
      {/* <!-- ====== Hero Section End --> */}
    </>
  )
}
