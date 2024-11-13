import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/hn\.algolia\.com\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'hn-api-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Hacker News Offline App',
        short_name: 'HN App',
        description: 'A Hacker News reader with offline capabilities',
        theme_color: '#ffffff',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),],
})
