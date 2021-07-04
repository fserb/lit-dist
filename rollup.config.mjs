import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './node_modules/lit/index.js',
  plugins: [
    resolve({
      browser: true,
    }),
  ],
  preserveEntrySignatures: true,
  output: {
    inlineDynamicImports: true,
    format: 'es',
    name: 'main',
    sourcemap: false,
    file: 'lit.js'
  }
};
