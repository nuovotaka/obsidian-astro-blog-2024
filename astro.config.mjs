import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
          vault: './vault/public',
        }),
      ],
      sidebar: [
        {
          label: '現状',
          items: [{ label:"現在の状態", link: '/notes/now/2024-03-21-now/' }],
        },
        // Add the generated sidebar group to the sidebar.
        obsidianSidebarGroup,
      ],
      title: 'NUOVOTAKA',
    }),
  ],
})