/**
 * 另一个落地页主题
 * 主配置 = 英文（默认语言）
 * _CN = 中文翻译
 * _RO = 罗马尼亚语翻译
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/mahjong-red.png', // 普通logo图片
  STARTER_LOGO_WHITE: '/images/starter/logo/mahjong-red.png', // 透明底浅色logo

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true,
  STARTER_HERO_TITLE_1: 'Welcome to Jade Chinese Club!',
  STARTER_HERO_TITLE_1_CN: '欢迎来到翡翠中文俱乐部！',
  STARTER_HERO_TITLE_1_RO: 'Bine ați venit la Jade Chinese Club!',
  STARTER_HERO_TITLE_1_LINE1: 'Welcome to',
  STARTER_HERO_TITLE_1_LINE1_CN: '欢迎来到',
  STARTER_HERO_TITLE_1_LINE1_RO: 'Bine ați venit la',
  STARTER_HERO_TITLE_1_LINE2: 'Jade Chinese Club!',
  STARTER_HERO_TITLE_1_LINE2_CN: '翡翠中文俱乐部！',
  STARTER_HERO_TITLE_1_LINE2_RO: 'Jade Chinese Club!',
  STARTER_HERO_TITLE_2: '',
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Contact me',
  STARTER_HERO_BUTTON_1_TEXT_CN: '联系我',
  STARTER_HERO_BUTTON_1_TEXT_RO: 'Contactați-mă',
  STARTER_HERO_BUTTON_1_URL: 'https://wa.me/40748083168',
  STARTER_HERO_BUTTON_2_TEXT: '',
  STARTER_HERO_BUTTON_2_URL: '',
  STARTER_HERO_BUTTON_1_ICON: '/images/starter/whatsapp-new.svg',

  // 英雄区配图
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/cnl.jpg',
  STARTER_HERO_BANNER_IMAGE: '',

  // Hero 轮播图配置（优先于 PREVIEW_IMAGE）
  STARTER_HERO_CAROUSEL_IMAGES: [
    '/images/starter/hero/cnl.jpg',
    '/images/starter/hero/hero-02.jpg',
    '/images/starter/hero/hero-03.jpg',
  ],
  STARTER_HERO_CAROUSEL_INTERVAL: 5000,

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',
  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: '',
  STARTER_FEATURE_TEXT_1: 'Our Services',
  STARTER_FEATURE_TEXT_1_CN: '我们的服务',
  STARTER_FEATURE_TEXT_1_RO: 'Serviciile noastre',
  STARTER_FEATURE_TEXT_2: 'Professional Chinese teaching and cultural services to meet your diverse needs',
  STARTER_FEATURE_TEXT_2_CN: '专业的中文教学与中国文化服务，满足您的多样化需求',
  STARTER_FEATURE_TEXT_2_RO: 'Servicii profesionale de predare a limbii chineze și servicii culturale pentru a satisface nevoile dumneavoastră diverse',

  STARTER_FEATURE_1_TITLE_1: 'Chinese Language Learning',
  STARTER_FEATURE_1_TITLE_1_CN: '中文语言学习',
  STARTER_FEATURE_1_TITLE_1_RO: 'Învățarea limbii chineze',
  STARTER_FEATURE_1_TEXT_1: 'Professional Chinese courses from beginner to advanced, HSK exam preparation',
  STARTER_FEATURE_1_TEXT_1_CN: '专业中文课程，从零基础到高级，HSK考试辅导',
  STARTER_FEATURE_1_TEXT_1_RO: 'Cursuri profesionale de chineză de la începător la avansat, pregătire pentru examenul HSK',
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_1_BUTTON_TEXT_CN: '了解更多',
  STARTER_FEATURE_1_BUTTON_TEXT_RO: 'Află mai multe',
  STARTER_FEATURE_1_BUTTON_URL: 'https://jadechineseclub.vercel.app/category/Chinese-Learning-Resource',

  STARTER_FEATURE_2_TITLE_1: 'China Travel',
  STARTER_FEATURE_2_TITLE_1_CN: '中国旅行',
  STARTER_FEATURE_2_TITLE_1_RO: 'Călătorii în China',
  STARTER_FEATURE_2_TEXT_1: 'Practical and useful tips and guidance for traveling in China, popular cities roadbooks.',
  STARTER_FEATURE_2_TEXT_1_CN: '实用的中国旅行攻略与指南，热门城市路书推荐',
  STARTER_FEATURE_2_TEXT_1_RO: 'Sfaturi practice și utile pentru călătorii în China, ghiduri pentru orașele populare',
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_2_BUTTON_TEXT_CN: '了解更多',
  STARTER_FEATURE_2_BUTTON_TEXT_RO: 'Află mai multe',
  STARTER_FEATURE_2_BUTTON_URL: 'https://jadechineseclub.vercel.app/category/China-Travel',

  STARTER_FEATURE_3_TITLE_1: 'Study in China',
  STARTER_FEATURE_3_TITLE_1_CN: '中国留学',
  STARTER_FEATURE_3_TITLE_1_RO: 'Studii în China',
  STARTER_FEATURE_3_TEXT_1: 'Study abroad consulting, academic Chinese improvement, campus life guidance',
  STARTER_FEATURE_3_TEXT_1_CN: '留学申请咨询，学术中文提升，校园生活指导',
  STARTER_FEATURE_3_TEXT_1_RO: 'Consultanță pentru studii în străinătate, îmbunătățirea chinezei academice, ghid pentru viața de campus',
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_3_BUTTON_TEXT_CN: '了解更多',
  STARTER_FEATURE_3_BUTTON_TEXT_RO: 'Află mai multe',
  STARTER_FEATURE_3_BUTTON_URL: '/sc',

  STARTER_FEATURE_4_TITLE_1: 'Culture & History',
  STARTER_FEATURE_4_TITLE_1_CN: '文化历史学习',
  STARTER_FEATURE_4_TITLE_1_RO: 'Cultură și istorie',
  STARTER_FEATURE_4_TEXT_1: 'Chinese news analysis, in-depth cultural and historical courses',
  STARTER_FEATURE_4_TEXT_1_CN: '中国新闻解读、文化历史深度学习课程',
  STARTER_FEATURE_4_TEXT_1_RO: 'Analiza știrilor din China, cursuri aprofundate de cultură și istorie',
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_4_BUTTON_TEXT_CN: '了解更多',
  STARTER_FEATURE_4_BUTTON_TEXT_RO: 'Află mai multe',
  STARTER_FEATURE_4_BUTTON_URL: '/cc',

  // ABOUT区块
  STARTER_ABOUT_ENABLE: true,
  STARTER_ABOUT_TITLE: 'Our Advantages',
  STARTER_ABOUT_TITLE_CN: '我们的优势',
  STARTER_ABOUT_TITLE_RO: 'Avantajele noastre',
  STARTER_ABOUT_TEXT: 'Professional, native speakers, barrier-free communication, multi-city experience, highly educated team <br /><br /> Young team, comprehensive services. We are committed to providing the best Chinese learning experience for every student.',
  STARTER_ABOUT_TEXT_CN: '专业、本土、无障碍沟通、多地旅居、高学历人才 <br /><br /> 年轻团队、全方位服务。我们致力于为每一位学员提供最优质的中文学习体验。',
  STARTER_ABOUT_TEXT_RO: 'Profesioniști, vorbitori nativi, comunicare fără bariere, experiență în mai multe orașe, echipă cu studii superioare <br /><br /> Echipă tânără, servicii complete. Ne angajăm să oferim cea mai bună experiență de învățare a limbii chineze.',
  STARTER_ABOUT_BUTTON_TEXT: 'Contact Us',
  STARTER_ABOUT_BUTTON_TEXT_CN: '联系我们',
  STARTER_ABOUT_BUTTON_TEXT_RO: 'Contactați-ne',
  STARTER_ABOUT_BUTTON_URL: '#contact',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: 'Satisfied Students',
  STARTER_ABOUT_TIPS_2_CN: '满意学员',
  STARTER_ABOUT_TIPS_2_RO: 'Studenți mulțumiți',
  STARTER_ABOUT_TIPS_3: 'From Around the World',
  STARTER_ABOUT_TIPS_3_CN: '来自全球各地',
  STARTER_ABOUT_TIPS_3_RO: 'Din întreaga lume',

  // 价格区块
  STARTER_PRICING_ENABLE: true,
  STARTER_PRICING_TITLE: 'Pricing',
  STARTER_PRICING_TITLE_CN: '定价',
  STARTER_PRICING_TITLE_RO: 'Prețuri',
  STARTER_PRICING_TEXT_1: 'Course Pricing',
  STARTER_PRICING_TEXT_1_CN: '课程价格表',
  STARTER_PRICING_TEXT_1_RO: 'Prețurile cursurilor',
  STARTER_PRICING_TEXT_2: 'Trial lesson 30min €19.9 (limited offer €9.9). We offer flexible course options to meet different learning needs.',
  STARTER_PRICING_TEXT_2_CN: '试课30min 原价19.9欧（限时特惠9.9欧）。我们提供灵活的课程选择，满足不同学习需求。',
  STARTER_PRICING_TEXT_2_RO: 'Lecție de probă 30 min 19,9€ (ofertă limitată 9,9€). Oferim opțiuni flexibile de cursuri pentru a satisface diferite nevoi de învățare.',

  STARTER_PRICING_1_TITLE: 'Casual Conversation',
  STARTER_PRICING_1_TITLE_CN: '普通会话 / 兴趣课',
  STARTER_PRICING_1_TITLE_RO: 'Conversație obișnuită',
  STARTER_PRICING_1_PRICE: '30',
  STARTER_PRICING_1_PRICE_CURRENCY: '€',
  STARTER_PRICING_1_PRICE_PERIOD: '/ 45 min',
  STARTER_PRICING_1_PRICE_PERIOD_CN: '/ 45分钟',
  STARTER_PRICING_1_PRICE_PERIOD_RO: '/ 45 min',
  STARTER_PRICING_1_HEADER: 'Course Content',
  STARTER_PRICING_1_HEADER_CN: '课程内容',
  STARTER_PRICING_1_HEADER_RO: 'Conținutul cursului',
  STARTER_PRICING_1_FEATURES: 'Daily conversation practice,Topic discussions,Pronunciation correction,Cultural exchange',
  STARTER_PRICING_1_FEATURES_CN: '日常会话练习,兴趣主题讨论,发音纠正,文化交流',
  STARTER_PRICING_1_FEATURES_RO: 'Practică de conversație zilnică,Discuții pe teme diverse,Corectarea pronunției,Schimb cultural',
  STARTER_PRICING_1_BUTTON_TEXT: 'Book a Trial',
  STARTER_PRICING_1_BUTTON_TEXT_CN: '预约试课',
  STARTER_PRICING_1_BUTTON_TEXT_RO: 'Rezervă o lecție de probă',
  STARTER_PRICING_1_BUTTON_URL: 'https://wa.me/40748083168',

  STARTER_PRICING_2_TAG: '',
  STARTER_PRICING_2_TAG_CN: '',
  STARTER_PRICING_2_TAG_RO: '',
  STARTER_PRICING_2_TITLE: 'Systematic Learning / HSK Exam',
  STARTER_PRICING_2_TITLE_CN: '系统学习 / HSK等级考试',
  STARTER_PRICING_2_TITLE_RO: 'Învățare sistematică / Examen HSK',
  STARTER_PRICING_2_PRICE: '35',
  STARTER_PRICING_2_PRICE_CURRENCY: '€',
  STARTER_PRICING_2_PRICE_PERIOD: '/ 45 min',
  STARTER_PRICING_2_PRICE_PERIOD_CN: '/ 45分钟',
  STARTER_PRICING_2_PRICE_PERIOD_RO: '/ 45 min',
  STARTER_PRICING_2_HEADER: 'Course Content',
  STARTER_PRICING_2_HEADER_CN: '课程内容',
  STARTER_PRICING_2_HEADER_RO: 'Conținutul cursului',
  STARTER_PRICING_2_FEATURES: 'Systematic teaching,HSK exam prep,Grammar intensive,Reading & writing,Mock exams',
  STARTER_PRICING_2_FEATURES_CN: '系统化教学,HSK考试辅导,语法精讲,阅读写作训练,模拟考试',
  STARTER_PRICING_2_FEATURES_RO: 'Predare sistematică,Pregătire examen HSK,Gramatică intensivă,Citire și scriere,Examene simulate',
  STARTER_PRICING_2_BUTTON_TEXT: 'Book a Trial',
  STARTER_PRICING_2_BUTTON_TEXT_CN: '预约试课',
  STARTER_PRICING_2_BUTTON_TEXT_RO: 'Rezervă o lecție de probă',
  STARTER_PRICING_2_BUTTON_URL: 'https://wa.me/40748083168',

  STARTER_PRICING_3_TITLE: 'Business Chinese & Custom',
  STARTER_PRICING_3_TITLE_CN: '商务中文 & 定制课程',
  STARTER_PRICING_3_TITLE_RO: 'Chineză de afaceri & Personalizat',
  STARTER_PRICING_3_PRICE: '45',
  STARTER_PRICING_3_PRICE_CURRENCY: '€',
  STARTER_PRICING_3_PRICE_PERIOD: '/ 45 min',
  STARTER_PRICING_3_PRICE_PERIOD_CN: '/ 45分钟',
  STARTER_PRICING_3_PRICE_PERIOD_RO: '/ 45 min',
  STARTER_PRICING_3_HEADER: 'Course Content',
  STARTER_PRICING_3_HEADER_CN: '课程内容',
  STARTER_PRICING_3_HEADER_RO: 'Conținutul cursului',
  STARTER_PRICING_3_FEATURES: 'Business Chinese,Customized curriculum,Business consulting',
  STARTER_PRICING_3_FEATURES_CN: '商务中文,定制化教学方案,商务咨询服务',
  STARTER_PRICING_3_FEATURES_RO: 'Chineză de afaceri,Curriculum personalizat,Consultanță de afaceri',
  STARTER_PRICING_3_BUTTON_TEXT: 'Book a Trial',
  STARTER_PRICING_3_BUTTON_TEXT_CN: '预约试课',
  STARTER_PRICING_3_BUTTON_TEXT_RO: 'Rezervă o lecție de probă',
  STARTER_PRICING_3_BUTTON_URL: 'https://wa.me/40748083168',

  // 用户评价区块
  STARTER_TESTIMONIALS_ENABLE: true,
  STARTER_TESTIMONIALS_TITLE: 'Testimonials',
  STARTER_TESTIMONIALS_TITLE_CN: '用户评价',
  STARTER_TESTIMONIALS_TITLE_RO: 'Testimoniale',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Students Say',
  STARTER_TESTIMONIALS_TEXT_1_CN: '学员们怎么说',
  STARTER_TESTIMONIALS_TEXT_1_RO: 'Ce spun studenții noștri',
  STARTER_TESTIMONIALS_TEXT_2: 'Students from around the world chose Jade Chinese Club. Hear about their learning experience',
  STARTER_TESTIMONIALS_TEXT_2_CN: '来自全球各地的学员选择了Jade Chinese Club，听听他们的学习体验',
  STARTER_TESTIMONIALS_TEXT_2_RO: 'Studenți din întreaga lume au ales Jade Chinese Club. Ascultați despre experiența lor de învățare',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg',

  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'The teacher is very professional and patient. The course content is rich and interesting, which filled me with passion for learning Chinese!',
      STARTER_TESTIMONIALS_ITEM_TEXT_CN: '老师非常专业耐心，课程内容丰富有趣，让我对中文学习充满了热情！',
      STARTER_TESTIMONIALS_ITEM_TEXT_RO: 'Profesorul este foarte profesionist și răbdător. Conținutul cursului este bogat și interesant!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/team/student-01.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Maria',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Conversation Student',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_CN: '会话课学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_RO: 'Studentă la conversație',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Through the systematic learning course, I successfully passed the HSK4 exam. Thank you so much Jade Chinese Club!',
      STARTER_TESTIMONIALS_ITEM_TEXT_CN: '通过系统学习课程，我顺利通过了HSK4考试，非常感谢Jade Chinese Club的帮助！',
      STARTER_TESTIMONIALS_ITEM_TEXT_RO: 'Prin cursul de învățare sistematică, am trecut cu succes examenul HSK4. Mulțumesc foarte mult!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/team/student-02.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Thomas',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'HSK Course Student',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_CN: 'HSK课程学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_RO: 'Student la cursul HSK',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'The business Chinese course helped me communicate better with Chinese clients at work. Very practical!',
      STARTER_TESTIMONIALS_ITEM_TEXT_CN: '商务中文课程帮助我在工作中更好地与中国客户沟通，课程非常实用。',
      STARTER_TESTIMONIALS_ITEM_TEXT_RO: 'Cursul de chineză de afaceri m-a ajutat să comunic mai bine cu clienții chinezi. Foarte practic!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/starter/team/student-03.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sophie',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Business Chinese Student',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_CN: '商务中文学员',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION_RO: 'Studentă la chineză de afaceri',
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  // FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true,
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TITLE_CN: '常见问题解答',
  STARTER_FAQ_TITLE_RO: 'Întrebări frecvente',
  STARTER_FAQ_TEXT_1: 'Have Questions? Look Here',
  STARTER_FAQ_TEXT_1_CN: '有任何疑问？请看这里',
  STARTER_FAQ_TEXT_1_RO: 'Aveți întrebări? Priviți aici',
  STARTER_FAQ_TEXT_2: 'We collected the most frequently asked questions from our students',
  STARTER_FAQ_TEXT_2_CN: '我们收集了学员们最常问的问题',
  STARTER_FAQ_TEXT_2_RO: 'Am colectat cele mai frecvente întrebări de la studenții noștri',

  STARTER_FAQ_1_QUESTION: 'What is the trial lesson like?',
  STARTER_FAQ_1_QUESTION_CN: '试课是怎样的？',
  STARTER_FAQ_1_QUESTION_RO: 'Cum este lecția de probă?',
  STARTER_FAQ_1_ANSWER: 'The trial lesson is 30 minutes, priced at €19.9 (limited offer €9.9). During the trial, the teacher will assess your Chinese level and learning goals, and create a personalized study plan for you.',
  STARTER_FAQ_1_ANSWER_CN: '试课时长30分钟，原价19.9欧（限时特惠9.9欧）。试课中老师会了解您的中文水平和学习目标，并为您制定个性化的学习方案。',
  STARTER_FAQ_1_ANSWER_RO: 'Lecția de probă durează 30 de minute, la prețul de 19,9€ (ofertă limitată 9,9€). Profesorul va evalua nivelul dumneavoastră de chineză și va crea un plan de studiu personalizat.',

  STARTER_FAQ_2_QUESTION: 'How are the lessons conducted?',
  STARTER_FAQ_2_QUESTION_CN: '课程是如何进行的？',
  STARTER_FAQ_2_QUESTION_RO: 'Cum se desfășoară lecțiile?',
  STARTER_FAQ_2_ANSWER: 'We conduct one-on-one teaching via online video, using professional textbooks and interactive tools to ensure an efficient learning experience. Each lesson is 45 minutes.',
  STARTER_FAQ_2_ANSWER_CN: '我们通过线上视频进行一对一教学，使用专业教材和互动工具，确保高效的学习体验。每节课45分钟。',
  STARTER_FAQ_2_ANSWER_RO: 'Predăm individual prin video online, folosind manuale profesionale și instrumente interactive. Fiecare lecție durează 45 de minute.',

  STARTER_FAQ_3_QUESTION: 'Can I learn without any Chinese background?',
  STARTER_FAQ_3_QUESTION_CN: '没有中文基础可以学吗？',
  STARTER_FAQ_3_QUESTION_RO: 'Pot învăța fără cunoștințe de chineză?',
  STARTER_FAQ_3_ANSWER: 'Absolutely! We have courses specifically designed for complete beginners. Teachers use English to assist teaching and help you get started with Chinese step by step.',
  STARTER_FAQ_3_ANSWER_CN: '当然可以！我们有专门针对零基础学员的课程，老师会用英文辅助教学，循序渐进地帮助您入门中文。',
  STARTER_FAQ_3_ANSWER_RO: 'Absolut! Avem cursuri special concepute pentru începători completi. Profesorii folosesc engleza pentru a vă ajuta pas cu pas.',

  STARTER_FAQ_4_QUESTION: 'How do I book a lesson?',
  STARTER_FAQ_4_QUESTION_CN: '如何预约课程？',
  STARTER_FAQ_4_QUESTION_RO: 'Cum rezerv o lecție?',
  STARTER_FAQ_4_ANSWER: 'You can contact us via WhatsApp, WeChat, or email to book a lesson. We flexibly adjust class times according to your schedule.',
  STARTER_FAQ_4_ANSWER_CN: '您可以通过WhatsApp、微信或邮件联系我们预约课程。我们会根据您的时间安排灵活调整上课时间。',
  STARTER_FAQ_4_ANSWER_RO: 'Ne puteți contacta prin WhatsApp, WeChat sau email pentru a rezerva o lecție. Ajustăm flexibil orele de curs în funcție de programul dumneavoastră.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true,
  STARTER_TEAM_TITLE: 'Our Team',
  STARTER_TEAM_TITLE_CN: '团队成员',
  STARTER_TEAM_TITLE_RO: 'Echipa noastră',
  STARTER_TEAM_TEXT_1: 'Our Teaching Team',
  STARTER_TEAM_TEXT_1_CN: '我们的教师团队',
  STARTER_TEAM_TEXT_1_RO: 'Echipa noastră de profesori',
  STARTER_TEAM_TEXT_2: 'Professional, passionate, and experienced Chinese teachers dedicated to providing you with the best teaching service',
  STARTER_TEAM_TEXT_2_CN: '专业、热情、经验丰富的中文教师团队，致力于为您提供最优质的教学服务',
  STARTER_TEAM_TEXT_2_RO: 'Profesori de chineză profesioniști, pasionați și experimentați, dedicați să vă ofere cele mai bune servicii de predare',

  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jade',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Chinese Teacher',
      STARTER_TEAM_ITEM_DESCRIPTION_CN: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_RO: 'Profesoară de chineză'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/teacher-02.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Xu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Chinese Teacher',
      STARTER_TEAM_ITEM_DESCRIPTION_CN: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_RO: 'Profesor de chineză'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/teacher-03.jpg',
      STARTER_TEAM_ITEM_NICKNAME: 'Tao',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Chinese Teacher',
      STARTER_TEAM_ITEM_DESCRIPTION_CN: '中文教师',
      STARTER_TEAM_ITEM_DESCRIPTION_RO: 'Profesor de chineză'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: false,
  STARTER_BLOG_TITLE: 'China News',
  STARTER_BLOG_TITLE_CN: '中国新闻',
  STARTER_BLOG_TITLE_RO: 'Știri din China',
  STARTER_BLOG_COUNT: 3,
  STARTER_BLOG_TEXT_1: 'Latest News',
  STARTER_BLOG_TEXT_1_CN: '最新资讯',
  STARTER_BLOG_TEXT_1_RO: 'Ultimele știri',
  STARTER_BLOG_TEXT_2: 'Follow the latest developments in China, explore Chinese culture, society and economy',
  STARTER_BLOG_TEXT_2_CN: '关注中国最新动态，了解中国文化、社会与经济发展',
  STARTER_BLOG_TEXT_2_RO: 'Urmăriți cele mai recente evoluții din China, explorați cultura, societatea și economia chineză',

  // 联系模块
  STARTER_CONTACT_ENABLE: true,
  STARTER_CONTACT_TITLE: 'Contact',
  STARTER_CONTACT_TITLE_CN: '联系方式',
  STARTER_CONTACT_TITLE_RO: 'Contact',
  STARTER_CONTACT_TEXT: 'Get in Touch',
  STARTER_CONTACT_TEXT_CN: '随时联系我们',
  STARTER_CONTACT_TEXT_RO: 'Luați legătura cu noi',
  STARTER_CONTACT_LOCATION_TITLE: 'WhatsApp',
  STARTER_CONTACT_LOCATION_TEXT: '+40 748 083 168',
  STARTER_CONTACT_WECHAT_TITLE: 'WeChat',
  STARTER_CONTACT_WECHAT_TEXT: 'jadechineseclub',
  STARTER_CONTACT_EMAIL_TITLE: 'Email',
  STARTER_CONTACT_EMAIL_TEXT: 'jadechineseclub@gmail.com',

  STARTER_CONTACT_MSG_EXTERNAL_URL: '',

  // 合作伙伴
  STARTER_BRANDS_ENABLE: false,
  STARTER_BRANDS: [
    { IMAGE: '/images/starter/brands/graygrids.svg', IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg', URL: 'https://graygrids.com/', TITLE: 'graygrids' },
    { IMAGE: '/images/starter/brands/lineicons.svg', IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg', URL: 'https://lineicons.com/', TITLE: 'lineicons' },
    { IMAGE: '/images/starter/brands/uideck.svg', IMAGE_WHITE: '/images/starter/brands/uideck-white.svg', URL: 'https://uideck.com/', TITLE: 'uideck' },
    { IMAGE: '/images/starter/brands/ayroui.svg', IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg', URL: 'https://ayroui.com/', TITLE: 'ayroui' },
    { IMAGE: '/images/starter/brands/tailgrids.svg', IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg', URL: 'https://tailgrids.com/', TITLE: 'tailgrids' }
  ],

  STARTER_FOOTER_SLOGAN: 'Jade Chinese Club - Professional Chinese Teaching & Cultural Services',
  STARTER_FOOTER_SLOGAN_CN: 'Jade Chinese Club - 专业中文教学与文化服务',
  STARTER_FOOTER_SLOGAN_RO: 'Jade Chinese Club - Predare profesională a limbii chineze și servicii culturale',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Courses',
      TITLE_CN: '课程服务',
      TITLE_RO: 'Cursuri',
      LINK_GROUP: [
        { TITLE: 'Conversation', TITLE_CN: '普通会话课', TITLE_RO: 'Conversație', URL: '#pricing' },
        { TITLE: 'HSK Exam Prep', TITLE_CN: 'HSK考试辅导', TITLE_RO: 'Pregătire HSK', URL: '#pricing' },
        { TITLE: 'Business Chinese', TITLE_CN: '商务中文', TITLE_RO: 'Chineză de afaceri', URL: '#pricing' },
        { TITLE: 'Custom Course', TITLE_CN: '定制课程', TITLE_RO: 'Curs personalizat', URL: '#pricing' }
      ]
    },
    {
      TITLE: 'About Us',
      TITLE_CN: '关于我们',
      TITLE_RO: 'Despre noi',
      LINK_GROUP: [
        { TITLE: 'Our Team', TITLE_CN: '团队介绍', TITLE_RO: 'Echipa noastră', URL: '#team' },
        { TITLE: 'Testimonials', TITLE_CN: '学员评价', TITLE_RO: 'Testimoniale', URL: '#testimonials' },
        { TITLE: 'FAQ', TITLE_CN: '常见问题', TITLE_RO: 'Întrebări frecvente', URL: '#faq' }
      ]
    },
    {
      TITLE: 'Contact',
      TITLE_CN: '联系方式',
      TITLE_RO: 'Contact',
      LINK_GROUP: [
        { TITLE: 'WhatsApp', URL: 'https://wa.me/40748083168' },
        { TITLE: 'Email', URL: 'mailto:jadechineseclub@gmail.com' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Posts',
  STARTER_FOOTER_BLOG_LATEST_TITLE_CN: '最新文章',
  STARTER_FOOTER_BLOG_LATEST_TITLE_RO: 'Ultimele articole',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_TEXT_CN: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_TEXT_RO: 'Politica de confidențialitate',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT_CN: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT_RO: 'Notificare legală',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT_CN: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT_RO: 'Termeni și condiții',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面
  STARTER_404_TITLE: "We can't seem to find the page you're looking for.",
  STARTER_404_TITLE_CN: '我们似乎找不到您要找的页面。',
  STARTER_404_TITLE_RO: 'Nu putem găsi pagina pe care o căutați.',
  STARTER_404_TEXT: 'Sorry! The page you are looking for does not exist. It may have been moved or deleted.',
  STARTER_404_TEXT_CN: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_TEXT_RO: 'Ne pare rău! Pagina pe care o căutați nu există. Este posibil să fi fost mutată sau ștearsă.',
  STARTER_404_BACK: 'Back to Home',
  STARTER_404_BACK_CN: '回到主页',
  STARTER_404_BACK_RO: 'Înapoi la pagina principală',

  // 行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'Ready to Start Learning Chinese?',
  STARTER_CTA_TITLE_CN: '准备好开始学中文了吗？',
  STARTER_CTA_TITLE_RO: 'Sunteți gata să începeți să învățați chineza?',
  STARTER_CTA_TITLE_2: 'Book a Trial Lesson Now',
  STARTER_CTA_TITLE_2_CN: '立即预约试课',
  STARTER_CTA_TITLE_2_RO: 'Rezervați o lecție de probă acum',
  STARTER_CTA_DESCRIPTION: 'Trial lesson 30 min for only €19.9 (limited offer €9.9). Let us create a personalized study plan for you',
  STARTER_CTA_DESCRIPTION_CN: '试课30分钟原价19.9欧（限时特惠9.9欧），让我们为您量身定制学习方案',
  STARTER_CTA_DESCRIPTION_RO: 'Lecție de probă 30 min doar 19,9€ (ofertă limitată 9,9€). Permiteți-ne să creăm un plan de studiu personalizat',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: 'https://wa.me/40748083168',
  STARTER_CTA_BUTTON_TEXT: 'Book a Trial',
  STARTER_CTA_BUTTON_TEXT_CN: '预约试课',
  STARTER_CTA_BUTTON_TEXT_RO: 'Rezervă o lecție de probă',

  STARTER_POST_REDIRECT_ENABLE: false,
  STARTER_POST_REDIRECT_URL: '',
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false
}
export default CONFIG
