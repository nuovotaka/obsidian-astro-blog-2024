import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightObsidian from 'starlight-obsidian'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: './vault/public',
        }),
      ],
      // sidebar: [
      //   {
      //     label: '現状',
      //     items: [{ label:"現在の状態", link: '/notes/now/2024-11-12-now/' }],
      //   },
      //   // Add the generated sidebar group to the sidebar.
      //   obsidianSidebarGroup,
      // ],
      title: 'NUOVOTAKA',
      // head にアドセンスの script タグを追加
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2390425539078205', // 自身のクライアントIDに置き換え
            crossorigin: 'anonymous',
          },
        },
      ],
    }),
  ],
})