import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build', // CRA gebruikt 'build', Vite standaard 'dist'. Dit behoudt de CRA map.
    },
    plugins: [react()],
  };
});