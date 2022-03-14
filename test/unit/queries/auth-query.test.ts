import { findUserByEmail, removeUserByEmail } from '@src/queries/auth-query';

describe('findUserByEmail 함수는 email로 user를 조회해야합니다.', () => {
  test('해당 email의 user가 있으면, user를 반환해야합니다.', async () => {
    const user = await findUserByEmail('abcde@gmail.com');
    expect(user).toStrictEqual({
      userId: expect.any(Number),
      email: expect.any(String),
      password: expect.any(String),
      createAt: expect.any(Date),
      updatedAt: null,
      // updatedAt: expect.toBeOneOf([null, expect.any(Date)]),
    });
  });

  test('해당 email의 user가 없으면, undefined를 반환해야합니다.', async () => {
    const user = await findUserByEmail('...@gmail.com');
    expect(user).toBeUndefined();
  });
});

describe('removeUserByEmail 함수는 email로 user를 조회해야합니다.', () => {
  test('해당 email의 user를 삭제해야합니다.', async () => {
    const user = await removeUserByEmail('abcde@gmail.com');
    expect(user).toStrictEqual({
      userId: expect.any(Number),
      email: expect.any(String),
      password: expect.any(String),
      createAt: expect.any(Date),
      updatedAt: null,
    });
  });
});
