import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' assert { type: 'json' };

const globals = {
  react: 'React',
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      name: 'ReactEasyStateMachine',
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: Object.keys(globals),
  plugins: [commonjs(), typescript()],
};
