import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '**/dist/**'],
    
    include: ['__tests__/**/*.{test,spec}.ts'],
	environment: 'jsdom',
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