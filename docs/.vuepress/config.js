module.exports = {
  title: 'styd-vue-OA',
  description: 'OA 系统前端文档',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/guide/',
      ['/guide/', 'Explicit link text']
    ],
    lastUpdated: 'Last Updated',
  }
}