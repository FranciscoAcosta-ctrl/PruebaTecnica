import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim : true,
      skipWaiting: true
    },
    devOptions: {
      enabled: true
    },
    includeAssets: ['icon.ico'],
    manifest: {
      name: 'Prueba Tecnica',
      short_name: 'Prueba Tecnica',
      description: 'Una aplicacion de examen tecnico',
      theme_color: '#1C1C1C',
      icons: [
        {
          src: 'icon.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
});
