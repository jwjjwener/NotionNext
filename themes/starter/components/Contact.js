import { siteConfig } from '@/lib/config'
import { useStarterI18n } from '../hooks/useStarterI18n'
import CONFIG from '../config'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='bg-[#FFE4E6] dark:bg-black py-20 md:py-[120px]'>
        <div className='container px-4'>
          <div className='mx-auto max-w-[700px]'>
            <div className='mb-10 text-center lg:text-left'>
              <span className='mb-4 block text-base font-medium text-dark dark:text-white'>
                {useStarterI18n('STARTER_CONTACT_TITLE')}
              </span>
              <h2 className='text-[35px] font-semibold leading-[1.14] text-dark dark:text-white'>
                {useStarterI18n('STARTER_CONTACT_TEXT')}
              </h2>
            </div>
            <div className='flex flex-wrap gap-8 justify-center lg:justify-start'>
              {/* WhatsApp */}
              <div className='flex items-center gap-4'>
                <div className='text-[28px] text-primary'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                  </svg>
                </div>
                <div>
                  <h5 className='text-base font-semibold text-dark dark:text-white'>
                    {siteConfig('STARTER_CONTACT_LOCATION_TITLE', null, CONFIG)}
                  </h5>
                  <p className='text-sm text-body-color dark:text-dark-6'>
                    {siteConfig('STARTER_CONTACT_LOCATION_TEXT', null, CONFIG)}
                  </p>
                </div>
              </div>

              {/* WeChat */}
              <div className='flex items-center gap-4'>
                <div className='text-[28px] text-primary'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.97 3.573c-1.79-.145-3.694.342-5.09 1.498-1.477 1.225-2.251 3.184-1.641 5.348.549 1.953 2.185 3.293 4.08 3.907a8.61 8.61 0 002.37.332c.678 0 1.35-.09 2.004-.27a.63.63 0 01.523.071l1.39.812a.236.236 0 00.122.04.214.214 0 00.212-.214c0-.053-.02-.104-.035-.155l-.285-1.079a.43.43 0 01.156-.484c1.335-.985 2.19-2.432 2.19-4.048 0-3.028-2.79-5.758-5.996-5.758zm-1.834 3.37c.467 0 .846.383.846.858a.852.852 0 01-.846.858.852.852 0 01-.846-.858c0-.474.379-.858.846-.858zm4.232 0c.467 0 .846.383.846.858a.852.852 0 01-.846.858.852.852 0 01-.846-.858c0-.474.379-.858.846-.858z' />
                  </svg>
                </div>
                <div>
                  <h5 className='text-base font-semibold text-dark dark:text-white'>
                    {siteConfig('STARTER_CONTACT_WECHAT_TITLE', null, CONFIG)}
                  </h5>
                  <p className='text-sm text-body-color dark:text-dark-6'>
                    {siteConfig('STARTER_CONTACT_WECHAT_TEXT', null, CONFIG)}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-center gap-4'>
                <div className='text-[28px] text-primary'>
                  <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <rect x='2' y='4' width='20' height='16' rx='2' />
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                  </svg>
                </div>
                <div>
                  <h5 className='text-base font-semibold text-dark dark:text-white'>
                    {siteConfig('STARTER_CONTACT_EMAIL_TITLE', null, CONFIG)}
                  </h5>
                  <p className='text-sm text-body-color dark:text-dark-6'>
                    {siteConfig('STARTER_CONTACT_EMAIL_TEXT')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
