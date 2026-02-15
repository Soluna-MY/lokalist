import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lokalist",
  description: "A Malaysian local projects collection",

  sitemap: {
    hostname: 'https://lokalist.soluna.my'
  },

  head: [
    // Favicon
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  
    // Web App Manifest
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#88e637' }],
  
    // Open Graph (Facebook, etc.)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Lokalist by Soluna | Malaysian Projects Collection' }],
    ['meta', { property: 'og:description', content: 'A curated directory of Malaysian-made software, tools, and platforms.' }],
    ['meta', { property: 'og:image', content: 'https://lokalist.soluna.my/og.png' }],
    ['meta', { property: 'og:url', content: 'https://lokalist.soluna.my' }],
  
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Lokalist by Soluna | Malaysian Projects Collection' }],
    ['meta', { name: 'twitter:description', content: 'A curated directory of Malaysian-made software, tools, and platforms.' }],
    ['meta', { name: 'twitter:image', content: 'https://lokalist.soluna.my/og.png' }]
  ],


  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Soluna-MY/lokalist' },
      { icon: 'instagram', link: 'https://www.instagram.com/solunamy'}
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          ms: {
            translations: {
              button: {
                buttonText: 'Cari Dokumen',
                buttonAriaLabel: 'Cari Dokumen'
              },
              modal: {
                noResultsText: 'Tiada hasil ditemui',
                resetButtonTitle: 'Set semula carian',
                footer: {
                  selectText: 'untuk pilih',
                  navigateText: 'untuk navigasi',
                  closeText: 'untuk tutup'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      titleTemplate: ':title | Lokalist Made by Soluna MY | A Malaysian Local Projects Collection',
      themeConfig: {
        logo: '/lokalist-logo.webp', // Added logo here
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About Soluna', link: '/about/soluna' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'FAQ', link: '/faq' }
            ]
          },
          {
            text: 'Wiki',
            items: [
              { text: 'Social', link: '/wiki/social' },
              { text: 'Finance', link: '/wiki/finance' },
              { text: 'Lifestyle', link: '/wiki/lifestyle' },
              { text: 'Education', link: '/wiki/education' },
              { text: 'Games', link: '/wiki/games' },
              { text: 'Tools', link: '/wiki/tools' },
              { text: 'Technology', link: '/wiki/technology' },
            ]
          },
          {
            text: 'Tools',
            items: [
              { text: 'Business', link: '/wiki/tools/#business' },
              { text: 'Productivity', link: '/wiki/tools/#productivity' }
            ]
          }
        ],
        // The following settings are inherited by all locales
        // and do not need to be translated here.
        // The following settings are inherited by all locales
        // and do not need to be translated here.
      }
    },
    ms: {
      label: 'Bahasa Melayu',
      lang: 'ms',
      link: '/ms/',
      titleTemplate: ':title | Lokalist Made by Soluna MY | A Malaysian Local Projects Collection',
      themeConfig: {
        logo: '/lokalist-logo.webp', // Added logo here
        nav: [
          { text: 'Laman Utama', link: '/ms/' },
          { text: 'Mengenai Soluna', link: '/ms/about/soluna' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Pengenalan', link: '/ms/introduction' },
              { text: 'Soalan Lazim', link: '/ms/faq' }
            ]
          },
          {
            text: 'Wiki',
            items: [
              { text: 'Sosial', link: '/ms/wiki/social' },
              { text: 'Kewangan', link: '/ms/wiki/finance' },
              { text: 'Gaya Hidup', link: '/ms/wiki/lifestyle' },
              { text: 'Pendidikan', link: '/ms/wiki/education' },
              { text: 'Permainan', link: '/ms/wiki/games' },
              { text: 'Teknologi', link: '/ms/wiki/technology' },
            ]
          },
          {
            text: 'Alatan',
            items: [
              { text: 'Perniagaan', link: '/ms/wiki/tools/#perniagaan' },
              { text: 'Produktiviti', link: '/ms/wiki/tools/#produktiviti' }
            ]
          }
        ],
        // Translate built-in theme text
        returnToTopLabel: 'Kembali ke atas',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Tukar tema',
        docFooter: {
          prev: 'Halaman sebelumnya',
          next: 'Halaman seterusnya'
        }
      }
    }
  }
})
