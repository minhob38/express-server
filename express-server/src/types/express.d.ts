import { IUserInfo } from './types';

declare global {
  namespace Express {
    interface Request {
      userInfo: IUserInfo;
    }
  }
}
