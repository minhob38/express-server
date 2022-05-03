import { AuthsGuard } from './auths.guard';

describe('AuthsGuard', () => {
  it('should be defined', () => {
    expect(new AuthsGuard()).toBeDefined();
  });
});
