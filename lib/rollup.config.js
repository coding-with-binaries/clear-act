import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/components/index.js',
    external: [
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies)
    ],
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
