import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 根据当前语言返回对应的 starter 配置文案
 * 英文配置键名 = 中文键名 + '_EN'
 * @param {string} key - 配置键名，如 'STARTER_HERO_TITLE_1'
 * @param {*} defaultVal - 默认值
 * @param {*} config - 扩展配置
 * @returns 当前语言对应的文案
 */
export function useStarterI18n(key, defaultVal = null, config) {
  const { lang } = useGlobal()
  const isEn = lang?.startsWith('en')

  if (isEn) {
    const enVal = siteConfig(key + '_EN', null, config)
    if (enVal) return enVal
  }

  return siteConfig(key, defaultVal, config)
}
