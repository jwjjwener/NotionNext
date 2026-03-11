import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 根据当前语言返回对应的 starter 配置文案
 * 主配置 = 英文（默认）
 * 中文配置键名 = 主键名 + '_CN'
 * 罗马尼亚语配置键名 = 主键名 + '_RO'
 * @param {string} key - 配置键名，如 'STARTER_HERO_TITLE_1'
 * @param {*} defaultVal - 默认值
 * @param {*} config - 扩展配置
 * @returns 当前语言对应的文案
 */
export function useStarterI18n(key, defaultVal = null, config) {
  const { lang } = useGlobal()

  if (lang?.startsWith('zh')) {
    const cnVal = siteConfig(key + '_CN', null, config)
    if (cnVal) return cnVal
  } else if (lang?.startsWith('ro')) {
    const roVal = siteConfig(key + '_RO', null, config)
    if (roVal) return roVal
  }

  // 默认返回主配置（英文）
  return siteConfig(key, defaultVal, config)
}
