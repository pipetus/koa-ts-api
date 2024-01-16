import type { Config } from 'jest';
import defualtConfig from '../../../jest.config';

const config: Config = {
  ...defualtConfig,
  testRegex: '.e2e-test.ts$',
  coverageDirectory: '../../../coverage/e2e',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      { tsconfig: '<rootDir>/../../../tsconfig.spec.json' },
    ],
  },
};

export default config;
