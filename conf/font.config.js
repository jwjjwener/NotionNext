/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 精简：只保留 Noto Sans SC (400/700)，去掉 Bitter + Noto Serif SC 节省 ~600kB
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap'
  ],

  // 字体优化配置
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  FONT_PRELOAD: process.env.NEXT_PUBLIC_FONT_PRELOAD || true,
  FONT_SUBSET: process.env.NEXT_PUBLIC_FONT_SUBSET || 'chinese-simplified',
  // 无衬线字体
  FONT_SANS: [
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体（不再加载 Bitter/Noto Serif SC，用系统字体 fallback）
  FONT_SERIF: [
    '"Noto Sans SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'

  // END ************网站字体*****************
}
