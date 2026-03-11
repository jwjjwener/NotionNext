import { useGlobal } from '@/lib/global'

const langOrder = ['en-US', 'ro-RO', 'zh-CN']
const langLabels = { 'en-US': 'EN', 'ro-RO': 'RO', 'zh-CN': 'CN' }

/**
 * 语言切换按钮 — EN → RO → CN 三语循环
 */
export const LangSwitchButton = () => {
  const { lang, changeLang } = useGlobal()

  const currentLabel = langLabels[lang] || 'EN'

  const handleToggle = () => {
    const currentIndex = langOrder.indexOf(lang)
    const nextLang = langOrder[(currentIndex + 1) % langOrder.length]
    changeLang(nextLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', nextLang)
    }
  }

  return (
    <button
      onClick={handleToggle}
      className='inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary transition'
      aria-label='Switch Language'
      title='Switch Language'>
      {currentLabel}
    </button>
  )
}
