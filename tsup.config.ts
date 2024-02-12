import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/'],
  splitting: false,
  // sourcemap: true,
  clean: true,
  platform: 'neutral',
  outDir: 'dist',
  dts: true,
  format: ['cjs', 'esm', 'iife'],
  shims: true,
  banner: {
    js: 'globalThis.require ||= _ => (console.warn("import error", _), _)',
  }
})
