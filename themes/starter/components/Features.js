import { siteConfig } from '@/lib/config'
import { useStarterI18n } from '../hooks/useStarterI18n'
import SmartLink from '@/components/SmartLink'
/**
 * 产品特性 — 只保留两个卡片，横向排列
 */
export const Features = () => {
  return (
    <>
      {/* <!-- ====== Features Section Start --> */}
      <section className='bg-white pb-12 pt-20 dark:bg-black lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {useStarterI18n('STARTER_FEATURE_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {useStarterI18n('STARTER_FEATURE_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {useStarterI18n('STARTER_FEATURE_TEXT_2')}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap justify-center'>
            {/* 语言学习 */}
            <div className='w-full px-4 md:w-1/2 lg:w-5/12'>
              <div className='wow fadeInUp group mb-12 rounded-xl bg-white dark:bg-[#111] p-8 shadow-testimonial dark:shadow-none hover:shadow-lg transition' data-wow-delay='.1s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 text-primary'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-10 duration-300 group-hover:rotate-45'></span>
                  {/* 语言图标 */}
                  <svg width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M5 8l6 6' />
                    <path d='M4 14l6-6 2-3' />
                    <path d='M2 5h12' />
                    <path d='M7 2h1' />
                    <path d='M22 22l-5-10-5 10' />
                    <path d='M14 18h6' />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>
                  {useStarterI18n('STARTER_FEATURE_1_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>
                  {useStarterI18n('STARTER_FEATURE_1_TEXT_1')}
                </p>
                <SmartLink
                  href={siteConfig('STARTER_FEATURE_1_BUTTON_URL', '')}
                  className='text-base font-medium text-primary hover:opacity-70'>
                  {useStarterI18n('STARTER_FEATURE_1_BUTTON_TEXT')}
                </SmartLink>
              </div>
            </div>

            {/* 旅游中文 */}
            <div className='w-full px-4 md:w-1/2 lg:w-5/12'>
              <div className='wow fadeInUp group mb-12 rounded-xl bg-white dark:bg-[#111] p-8 shadow-testimonial dark:shadow-none hover:shadow-lg transition' data-wow-delay='.15s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 text-primary'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-10 duration-300 group-hover:rotate-45'></span>
                  {/* 旅游图标 */}
                  <svg width='36' height='36' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='12' cy='12' r='10' />
                    <path d='M2 12h20' />
                    <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
                  </svg>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>
                  {useStarterI18n('STARTER_FEATURE_2_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>
                  {useStarterI18n('STARTER_FEATURE_2_TEXT_1')}
                </p>
                <SmartLink
                  href={siteConfig('STARTER_FEATURE_2_BUTTON_URL', '')}
                  className='text-base font-medium text-primary hover:opacity-70'>
                  {useStarterI18n('STARTER_FEATURE_2_BUTTON_TEXT')}
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
    </>
  )
}
