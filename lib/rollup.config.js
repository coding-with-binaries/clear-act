import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'components/index.js',
    external: ['react', 'prop-types'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        presets: [['@babel/preset-react']]
      })
    ]
  }
];
