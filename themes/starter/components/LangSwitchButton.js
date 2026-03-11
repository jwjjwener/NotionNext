import { useGlobal } from '@/lib/global'

/**
 * 语言切换按钮 — 中/EN 切换
 */
export const LangSwitchButton = () => {
  const { lang, changeLang } = useGlobal()
  const isEn = lang?.startsWith('en')

  const handleToggle = () => {
    const newLang = isEn ? 'zh-CN' : 'en-US'
    changeLang(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang)
    }
  }

  return (
    <button
      onClick={handleToggle}
      className='inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary transition'
      aria-label='Switch Language'
      title={isEn ? '切换到中文' : 'Switch to English'}>
      {isEn ? 'EN' : 'CN'}
    </button>
  )
}
