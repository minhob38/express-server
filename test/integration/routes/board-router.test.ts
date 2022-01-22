import request from 'supertest';
import server from '@src/server';
import { createToken } from '@src/utils/auth-util';

describe('GET /api/board/posts route.', () => {
  const token = createToken('abcde@gmail.com');

  test('200 status code와 함께, 전체 게시글들을 응답해야합니다..', (done) => {
    request(server)
      .get('/api/board/posts')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .then((res) => {
        const data = res.body.data;
        expect(data).toBeInstanceOf(Array);
        expect(data).toStrictEqual(
          expect.arrayContaining([
            {
              postId: expect.any(Number),
              author: expect.any(String),
              title: expect.any(String),
              content: expect.any(String),
              createAt: expect.any(String),
              updatedAt: null,
            },
          ])
        );
        done();
      })
      .catch((err) => done(err));
  });
});
