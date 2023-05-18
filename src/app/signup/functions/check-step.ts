import type { StepsSignUp } from '@/store/types'
export const checkStep = (current: StepsSignUp, expected: StepsSignUp) =>
  current === expected
