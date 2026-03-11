/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo.png', // 普通logo图片
  STARTER_LOGO_WHITE: '/images/starter/logo/logo.png', // 透明底浅色logo

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Welcome to Jade Chinese Club!', // 英雄区文字
  STARTER_HERO_TITLE_2: 'What we offer?', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Contact me', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://wa.me/40748083168', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_1_ICON: '/themes/starter/components/svg/whatsapp.svg', // 英雄区按钮1的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/cnl.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // Hero 轮播图配置（优先于 PREVIEW_IMAGE）
  STARTER_HERO_CAROUSEL_IMAGES: [
    '/images/starter/hero/cnl.jpg',
    '/images/starter/hero/hero-02.jpg',
    '/images/starter/hero/hero-03.jpg',
  ],
  STARTER_HERO_CAROUSEL_INTERVAL: 5000, // 轮播切换间隔（毫秒）

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块 - 服务导航按钮
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'What we offer?', // 特性
  STARTER_FEATURE_TEXT_1: '我们的服务', // 特性
  STARTER_FEATURE_TEXT_1_EN: 'Our Services',
  STARTER_FEATURE_TEXT_2:
    '专业的中文教学与中国文化服务，满足您的多样化需求', // 特性
  STARTER_FEATURE_TEXT_2_EN: 'Professional Chinese teaching and cultural services to meet your diverse needs',

  STARTER_FEATURE_1_TITLE_1: '语言学习', // 特性1
  STARTER_FEATURE_1_TITLE_1_EN: 'Language Learning',
  STARTER_FEATURE_1_TEXT_1: '专业中文课程，从零基础到高级，HSK考试辅导', // 特性1
  STARTER_FEATURE_1_TEXT_1_EN: 'Professional Chinese courses from beginner to advanced, HSK exam preparation',
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT_EN: 'Learn More',
  STARTER_FEATURE_1_BUTTON_URL: '/ll', // 特性1 - 语言学习

  STARTER_FEATURE_2_TITLE_1: '中国旅游', // 特性2
  STARTER_FEATURE_2_TITLE_1_EN: 'Travel Chinese',
  STARTER_FEATURE_2_TEXT_1: '旅行中文速成，实用会话与文化礼仪指导', // 特性2
  STARTER_FEATURE_2_TEXT_1_EN: 'Quick travel Chinese, practical conversations and cultural etiquette guidance',
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT_EN: 'Learn More',
  STARTER_FEATURE_2_BUTTON_URL: '/ct', // 特性2 - 中国旅游

  STARTER_FEATURE_3_TITLE_1: '中国留学', // 特性3
  STARTER_FEATURE_3_TITLE_1_EN: 'Study in China',
  STARTER_FEATURE_3_TEXT_1: '留学申请咨询，学术中文提升，校园生活指导', // 特性3
  STARTER_FEATURE_3_TEXT_1_EN: 'Study abroad consulting, academic Chinese improvement, campus life guidance',
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT_EN: 'Learn More',
  STARTER_FEATURE_3_BUTTON_URL: '/sc', // 特性3 - 中国留学

  STARTER_FEATURE_4_TITLE_1: '文化历史学习', // 特性4
  STARTER_FEATURE_4_TITLE_1_EN: 'Culture & History',
  STARTER_FEATURE_4_TEXT_1: '中国新闻解读、文化历史深度学习课程', // 特性4
  STARTER_FEATURE_4_TEXT_1_EN: 'Chinese news analysis, in-depth cultural and historical courses',
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT_EN: 'Learn More',
  STARTER_FEATURE_4_BUTTON_URL: '/cc', // 特性4 - 文化历史

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '我们的优势',
  STARTER_ABOUT_TITLE_EN: 'Our Advantages',
  STARTER_ABOUT_TEXT:
    '专业、本土、无障碍沟通、多地旅居、高学历人才 <br /><br /> 年轻团队、全方位服务。我们致力于为每一位学员提供最优质的中文学习体验。',
  STARTER_ABOUT_TEXT_EN:
    'Professional, native speakers, barrier-free communication, multi-city experience, highly educated team <br /><br /> Young team, comprehensive services. We are committed to providing the best Chinese learning experience for every student.',
  STARTER_ABOUT_BUTTON_TEXT: '联系我们',
  STARTER_ABOUT_BUTTON_TEXT_EN: 'Contact Us',
  STARTER_ABOUT_BUTTON_URL: '#contact',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: '满意学员',
  STARTER_ABOUT_TIPS_2_EN: 'Satisfied Students',
  STARTER_ABOUT_TIPS_3: '来自全球各地',
  STARTER_ABOUT_TIPS_3_EN: 'From Around the World',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '定价',
  STARTER_PRICING_TITLE_EN: 'Pricing',
  STARTER_PRICING_TEXT_1: '课程价格表',
  STARTER_PRICING_TEXT_1_EN: 'Course Pricing',
  STARTER_PRICING_TEXT_2:
    '试课30min 9.9欧（限时折扣4.9欧）。我们提供灵活的课程选择，满足不同学习需求。',
  STARTER_PRICING_TEXT_2_EN:
    'Trial lesson 30min €9.9 (limited offer €4.9). We offer flexible course options to meet different learning needs.',

  STARTER_PRICING_1_TITLE: '普通会话 / 兴趣课',
  STARTER_PRICING_1_TITLE_EN: 'Casual Conversation',
  STARTER_PRICING_1_PRICE: '30',
  STARTER_PRICING_1_PRICE_CURRENCY: '€',
  STARTER_PRICING_1_PRICE_PERIOD: '/ 45分钟',
  STARTER_PRICING_1_PRICE_PERIOD_EN: '/ 45 min',
  STARTER_PRICING_1_HEADER: '课程内容',
  STARTER_PRICING_1_HEADER_EN: 'Course Content',
  STARTER_PRICING_1_FEATURES: '日常会话练习,兴趣主题讨论,发音纠正,文化交流', // 英文逗号隔开
  STARTER_PRICING_1_FEATURES_EN: 'Daily conversation practice,Topic discussions,Pronunciation correction,Cultural exchange',
  STARTER_PRICING_1_BUTTON_TEXT: '预约试课',
  STARTER_PRICING_1_BUTTON_TEXT_EN: 'Book a Trial',
  STARTER_PRICING_1_BUTTON_URL:
    'https://wa.me/40748083168',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TAG_EN: 'Recommended',
  STARTER_PRICING_2_TITLE: '系统学习 / HSK等级考试',
  STARTER_PRICING_2_TITLE_EN: 'Systematic Learning / HSK Exam',
  STARTER_PRICING_2_PRICE: '35',
  STARTER_PRICING_2_PRICE_CURRENCY: '€',
  STARTER_PRICING_2_PRICE_PERIOD: '/ 45分钟',
  STARTER_PRICING_2_PRICE_PERIOD_EN: '/ 45 min',
  STARTER_PRICING_2_HEADER: '课程内容',
  STARTER_PRICING_2_HEADER_EN: 'Course Content',
  STARTER_PRICING_2_FEATURES: '系统化教学,HSK考试辅导,语法精讲,阅读写作训练,模拟考试', // 英文逗号隔开
  STARTER_PRICING_2_FEATURES_EN: 'Systematic teaching,HSK exam prep,Grammar intensive,Reading & writing,Mock exams',
  STARTER_PRICING_2_BUTTON_TEXT: '预约试课',
  STARTER_PRICING_2_BUTTON_TEXT_EN: 'Book a Trial',
  STARTER_PRICING_2_BUTTON_URL:
    'https://wa.me/40748083168',

  STARTER_PRICING_3_TITLE: '商务中文 / 定制课程',
  STARTER_PRICING_3_TITLE_EN: 'Business Chinese / Custom',
  STARTER_PRICING_3_PRICE: '45',
  STARTER_PRICING_3_PRICE_CURRENCY: '€',
  STARTER_PRICING_3_PRICE_PERIOD: '/ 45分钟',
  STARTER_PRICING_3_PRICE_PERIOD_EN: '/ 45 min',
  STARTER_PRICING_3_HEADER: '课程内容',
  STARTER_PRICING_3_HEADER_EN: 'Course Content',
  STARTER_PRICING_3_FEATURES: '商务中文,定制化教学方案,商务咨询服务', // 英文逗号隔开
  STARTER_PRICING_3_FEATURES_EN: 'Business Chinese,Customized curriculum,Business consulting',
  STARTER_PRICING_3_BUTTON_TEXT: '预约试课',
  STARTER_PRICING_3_BUTTON_TEXT_EN: 'Book a Trial',
  STARTER_PRICING_3_BUTTON_URL:
    'https://wa.me/40748083168',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户评价',
  STARTER_TESTIMONIALS_TITLE_EN: 'Testimonials',
  STARTER_TESTIMONIALS_TEXT_1: '学员们怎么说',
  STARTER_TESTIMONIALS_TEXT_1_EN: 'What Our Students Say',
  STARTER_TESTIMONIALS_TEXT_2:
    '来自全球各地的学员选择了Jade Chinese Club，听听他们的学习体验',
  STARTER_TESTIMONIALS_TEXT_2_EN:
    'Students from around the world chose Jade Chinese Club. Hear about their learning experience',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '老师非常专业耐心，课程内容丰富有趣，让我对中文学习充满了热情！',
      STARTER_TESTIMONIALS_ITEM_TEXT_EN:
        'The teacher is very professional and patient. The course content is rich and interesting, which filled me with passion for learning Chinese!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/team-01.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Maria',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '会话课学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_EN: 'Conversation Student',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '通过系统学习课程，我顺利通过了HSK4考试，非常感谢Jade Chinese Club的帮助！',
      STARTER_TESTIMONIALS_ITEM_TEXT_EN:
        'Through the systematic learning course, I successfully passed the HSK4 exam. Thank you so much Jade Chinese Club!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/team-02.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Thomas',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'HSK课程学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_EN: 'HSK Course Student',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '商务中文课程帮助我在工作中更好地与中国客户沟通，课程非常实用。',
      STARTER_TESTIMONIALS_ITEM_TEXT_EN:
        'The business Chinese course helped me communicate better with Chinese clients at work. Very practical!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/starter/team/team-03.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sophie',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '商务中文学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_EN: 'Business Chinese Student',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TITLE_EN: 'FAQ',
  STARTER_FAQ_TEXT_1: '有任何疑问？请看这里',
  STARTER_FAQ_TEXT_1_EN: 'Have Questions? Look Here',
  STARTER_FAQ_TEXT_2: '我们收集了学员们最常问的问题',
  STARTER_FAQ_TEXT_2_EN: 'We collected the most frequently asked questions from our students',

  STARTER_FAQ_1_QUESTION: '试课是怎样的？',
  STARTER_FAQ_1_QUESTION_EN: 'What is the trial lesson like?',
  STARTER_FAQ_1_ANSWER:
    '试课时长30分钟，费用9.9欧（限时折扣4.9欧）。试课中老师会了解您的中文水平和学习目标，并为您制定个性化的学习方案。',
  STARTER_FAQ_1_ANSWER_EN:
    'The trial lesson is 30 minutes, priced at €9.9 (limited offer €4.9). During the trial, the teacher will assess your Chinese level and learning goals, and create a personalized study plan for you.',

  STARTER_FAQ_2_QUESTION: '课程是如何进行的？',
  STARTER_FAQ_2_QUESTION_EN: 'How are the lessons conducted?',
  STARTER_FAQ_2_ANSWER:
    '我们通过线上视频进行一对一教学，使用专业教材和互动工具，确保高效的学习体验。每节课45分钟。',
  STARTER_FAQ_2_ANSWER_EN:
    'We conduct one-on-one teaching via online video, using professional textbooks and interactive tools to ensure an efficient learning experience. Each lesson is 45 minutes.',

  STARTER_FAQ_3_QUESTION: '没有中文基础可以学吗？',
  STARTER_FAQ_3_QUESTION_EN: 'Can I learn without any Chinese background?',
  STARTER_FAQ_3_ANSWER:
    '当然可以！我们有专门针对零基础学员的课程，老师会用英文辅助教学，循序渐进地帮助您入门中文。',
  STARTER_FAQ_3_ANSWER_EN:
    'Absolutely! We have courses specifically designed for complete beginners. Teachers use English to assist teaching and help you get started with Chinese step by step.',

  STARTER_FAQ_4_QUESTION: '如何预约课程？',
  STARTER_FAQ_4_QUESTION_EN: 'How do I book a lesson?',
  STARTER_FAQ_4_ANSWER:
    '您可以通过WhatsApp、微信或邮件联系我们预约课程。我们会根据您的时间安排灵活调整上课时间。',
  STARTER_FAQ_4_ANSWER_EN:
    'You can contact us via WhatsApp, WeChat, or email to book a lesson. We flexibly adjust class times according to your schedule.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TITLE_EN: 'Our Team',
  STARTER_TEAM_TEXT_1: '我们的教师团队',
  STARTER_TEAM_TEXT_1_EN: 'Our Teaching Team',
  STARTER_TEAM_TEXT_2:
    '专业、热情、经验丰富的中文教师团队，致力于为您提供最优质的教学服务',
  STARTER_TEAM_TEXT_2_EN:
    'Professional, passionate, and experienced Chinese teachers dedicated to providing you with the best teaching service',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jade',
      STARTER_TEAM_ITEM_DESCRIPTION: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_EN: 'Chinese Teacher'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Xu',
      STARTER_TEAM_ITEM_DESCRIPTION: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_EN: 'Chinese Teacher'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Tao',
      STARTER_TEAM_ITEM_DESCRIPTION: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_EN: 'Chinese Teacher'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '中国新闻',
  STARTER_BLOG_TITLE_EN: 'China News',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最新资讯',
  STARTER_BLOG_TEXT_1_EN: 'Latest News',
  STARTER_BLOG_TEXT_2:
    '关注中国最新动态，了解中国文化、社会与经济发展',
  STARTER_BLOG_TEXT_2_EN:
    'Follow the latest developments in China, explore Chinese culture, society and economy',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系方式',
  STARTER_CONTACT_TITLE_EN: 'Contact',
  STARTER_CONTACT_TEXT: '随时联系我们',
  STARTER_CONTACT_TEXT_EN: 'Get in Touch',
  STARTER_CONTACT_LOCATION_TITLE: 'WhatsApp & Wechat',
  STARTER_CONTACT_LOCATION_TEXT: 'WhatsApp: +40 748 083 168',
  STARTER_CONTACT_EMAIL_TITLE: 'Email',
  STARTER_CONTACT_EMAIL_TEXT: 'jadechineseclub@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 暂时关闭外部表单

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关 - 关闭
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Jade Chinese Club - 专业中文教学与文化服务',
  STARTER_FOOTER_SLOGAN_EN: 'Jade Chinese Club - Professional Chinese Teaching & Cultural Services',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '课程服务',
      TITLE_EN: 'Courses',
      LINK_GROUP: [
        { TITLE: '普通会话课', TITLE_EN: 'Conversation', URL: '#pricing' },
        { TITLE: 'HSK考试辅导', TITLE_EN: 'HSK Exam Prep', URL: '#pricing' },
        { TITLE: '商务中文', TITLE_EN: 'Business Chinese', URL: '#pricing' },
        { TITLE: '定制课程', TITLE_EN: 'Custom Course', URL: '#pricing' }
      ]
    },
    {
      TITLE: '关于我们',
      TITLE_EN: 'About Us',
      LINK_GROUP: [
        { TITLE: '团队介绍', TITLE_EN: 'Our Team', URL: '#team' },
        { TITLE: '学员评价', TITLE_EN: 'Testimonials', URL: '#testimonials' },
        { TITLE: '常见问题', TITLE_EN: 'FAQ', URL: '#faq' }
      ]
    },
    {
      TITLE: '联系方式',
      TITLE_EN: 'Contact',
      LINK_GROUP: [
        { TITLE: 'WhatsApp', URL: 'https://wa.me/40748083168' },
        { TITLE: 'Email', URL: 'mailto:jadechineseclub@gmail.com' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',
  STARTER_FOOTER_BLOG_LATEST_TITLE_EN: 'Latest Posts',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_TEXT_EN: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT_EN: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT_EN: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TITLE_EN: "We can't seem to find the page you're looking for.",
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_TEXT_EN: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted.',
  STARTER_404_BACK: '回到主页',
  STARTER_404_BACK_EN: 'Back to Home',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '准备好开始学中文了吗？',
  STARTER_CTA_TITLE_EN: 'Ready to Start Learning Chinese?',
  STARTER_CTA_TITLE_2: '立即预约试课',
  STARTER_CTA_TITLE_2_EN: 'Book a Trial Lesson Now',
  STARTER_CTA_DESCRIPTION:
    '试课30分钟仅需9.9欧（限时折扣4.9欧），让我们为您量身定制学习方案',
  STARTER_CTA_DESCRIPTION_EN:
    'Trial lesson 30 min for only €9.9 (limited offer €4.9). Let us create a personalized study plan for you',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://wa.me/40748083168',
  STARTER_CTA_BUTTON_TEXT: '预约试课',
  STARTER_CTA_BUTTON_TEXT_EN: 'Book a Trial',

  STARTER_POST_REDIRECT_ENABLE: false, // 关闭重定向
  STARTER_POST_REDIRECT_URL: '', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
