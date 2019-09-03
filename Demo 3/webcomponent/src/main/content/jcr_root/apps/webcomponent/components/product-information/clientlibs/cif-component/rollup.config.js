import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: '../js/adaptTo.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
      exclude: 'node_modules/**',
    }),
    commonjs({namedExports: { '@adobe/react-webcomponent': ['createCustomElement', 'DOMModel', 'byAttrVal' ] },}),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
}