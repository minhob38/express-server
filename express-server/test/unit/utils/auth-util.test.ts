import { createToken } from '@src/utils/auth-util';

console.log(process.env.NODE_ENV);
describe('createToken 함수는 json web token을 반환해야합니다.', () => {
  test('token은 문자열입니다.', () => {
    const token: string = createToken('minhob38@gmail.com');
    expect(typeof token).toBe('string');
  });
});
