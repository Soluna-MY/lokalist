import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lokalist",
  description: "A Malaysian local projects collection",

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
      themeConfig: {
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
              { text: 'Tools', link: '/wiki/tools' }
            ]
          }
        ],
        // The following settings are inherited by all locales
        // and do not need to be translated here.
      }
    },
    ms: {
      label: 'Bahasa Melayu',
      lang: 'ms',
      link: '/ms/',
      themeConfig: {
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
              { text: 'Alatan', link: '/ms/wiki/tools' }
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
