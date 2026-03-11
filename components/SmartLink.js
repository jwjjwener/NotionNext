import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// 过滤 <a> 标签不能识别的 props
const filterDOMProps = props => {
  const { passHref, legacyBehavior, ...rest } = props
  return rest
}

const SmartLink = ({ href, children, ...rest }) => {
  const LINK = siteConfig('LINK')

  // 获取 URL 字符串用于判断是否是外链
  let urlString = ''

  if (typeof href === 'string') {
    urlString = href
  } else if (
    typeof href === 'object' &&
    href !== null &&
    typeof href.pathname === 'string'
  ) {
    urlString = href.pathname
  }

  const isExternal = urlString.startsWith('http') && !urlString.startsWith(LINK)

  if (isExternal) {
    // 对于外部链接，必须是 string 类型
    const externalUrl =
      typeof href === 'string' ? href : new URL(href.pathname, LINK).toString()

    return (
      <a
        href={externalUrl}
        target='_blank'
        rel='noopener noreferrer'
        {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  // 内部链接（可为对象形式）
  // 禁用 prefetch：默认 prefetch=true 会在首页触发 20+ 个 _next/data/*.json 请求，
  // 对新用户（无缓存）造成连接饱和，load 事件被阻塞长达 1 分钟
  return (
    <Link href={href} prefetch={false} {...rest}>
      {children}
    </Link>
  )
}

export default SmartLink
