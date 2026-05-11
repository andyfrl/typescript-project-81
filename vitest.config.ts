import { defineConfig, configDefaults } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '**/dist/**'],
    
    include: ['__tests__/**/*.{test,spec}.ts'],

    alias: {
      '@hexlet/code': path.resolve(__dirname, 'src/index.ts'),
    },
	coverage: {
      provider: 'v8',
	  clean: true,
      reporter: ['text', 'json-summary'],
      include: ['./src/**/*.{ts,js}'],
      exclude: ['node_modules/', 'dist/', 'index.ts'],
	  reportsDirectory: './coverage',
	  reportOnFailure: true,
    },
  },
});